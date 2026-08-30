import {spawn} from 'node:child_process';
import {cp, readFile, stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function resolveInside(parentDirectory, childPath, description) {
  const resolvedParent = path.resolve(parentDirectory);
  const resolvedChild = path.resolve(resolvedParent, childPath);
  const relativePath = path.relative(resolvedParent, resolvedChild);

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    throw new Error(`${description} must stay within ${resolvedParent}`);
  }

  return resolvedChild;
}

function normalizeMountPath(mountPath) {
  if (
    typeof mountPath !== 'string' ||
    mountPath === '/' ||
    !mountPath.startsWith('/') ||
    mountPath.endsWith('/') ||
    path.posix.normalize(mountPath) !== mountPath
  ) {
    throw new Error(`Invalid project site mount path: ${mountPath}`);
  }

  return mountPath.slice(1);
}

async function runBuild(rootDirectory, name, buildConfig) {
  if (!buildConfig) {
    return;
  }

  const buildSteps = Array.isArray(buildConfig) ? buildConfig : [buildConfig];

  for (const [index, build] of buildSteps.entries()) {
    if (!build.command || !Array.isArray(build.args)) {
      throw new Error(`${name} build step ${index + 1} must provide a command and argument array`);
    }

    const cwd = resolveInside(rootDirectory, build.cwd ?? '.', `${name} build directory`);

    await new Promise((resolve, reject) => {
      const child = spawn(build.command, build.args, {cwd, stdio: 'inherit', shell: false});
      child.once('error', reject);
      child.once('exit', code => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`${name} build step ${index + 1} exited with code ${code}`));
        }
      });
    });
  }
}

export async function assembleProjectSites({rootDirectory = repositoryRoot, sites}) {
  const outputDirectory = resolveInside(rootDirectory, 'out', 'Site output directory');
  const destinations = new Set();

  const preparedSites = sites.map(site => {
    const {name, mountPath, source} = site;
    if (!name || !source) {
      throw new Error('Each project site must provide a name, mountPath, and source');
    }

    const mount = normalizeMountPath(mountPath);
    if (destinations.has(mount)) {
      throw new Error(`Duplicate project site mount path: ${mountPath}`);
    }
    destinations.add(mount);

    return {...site, mount};
  });

  for (const site of preparedSites) {
    const {name, mountPath, source, mount} = site;
    await runBuild(rootDirectory, name, site.build);

    const sourceDirectory = resolveInside(rootDirectory, source, `${name} source directory`);
    const sourceStats = await stat(sourceDirectory);
    if (!sourceStats.isDirectory()) {
      throw new Error(`${name} source is not a directory: ${source}`);
    }

    const destinationDirectory = resolveInside(outputDirectory, mount, `${name} mount path`);
    await cp(sourceDirectory, destinationDirectory, {
      recursive: true,
      force: false,
      errorOnExist: true
    });
    console.log(`Mounted ${name} at ${mountPath}`);
  }
}

async function main() {
  const configPath = path.join(repositoryRoot, 'project-sites.json');
  const config = JSON.parse(await readFile(configPath, 'utf8'));
  if (!Array.isArray(config.sites)) {
    throw new Error('project-sites.json must contain a sites array');
  }

  await assembleProjectSites({sites: config.sites});
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
