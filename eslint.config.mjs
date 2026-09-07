import {defineConfig, globalIgnores} from 'eslint/config';
import prettier from 'eslint-config-prettier/flat';
import tsParser from '@typescript-eslint/parser';

export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {parserOptions: {ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: {jsx: true}}}
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {parser: tsParser, parserOptions: {ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: {jsx: true}}}
  },
  prettier,
  globalIgnores(['build/**', 'out/**', 'projects/**'])
]);
