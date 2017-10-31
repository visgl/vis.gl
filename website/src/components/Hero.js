import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import { GL, AnimationLoop, Matrix4, radians, setParameters, Cube, dirlight } from 'luma.gl'

const SIDE = 64

const animationLoop = new AnimationLoop({
  createFramebuffer: true,
  onInitialize({ gl }) {
    setParameters(gl, {
      clearColor: [0, 0, 0, 1],
      clearDepth: 1,
      depthTest: true,
      depthFunc: GL.LEQUAL,
    })

    return {
      cube: makeInstancedCube(gl),
    }
  },
  onFinalize({ gl, cube }) {
    cube.delete()
  },
  onRender({ gl, tick, aspect, cube, framebuffer }) {
    cube.setUniforms({
      uTime: tick * 0.1,
      // Basic projection matrix
      uProjection: new Matrix4().perspective({ fov: radians(60), aspect, near: 1, far: 2048.0 }),
      // Move the eye around the plane
      uView: new Matrix4().lookAt({
        center: [0, 0, 0],
        eye: [0, Math.sin(tick * 0.006) * SIDE / 2, 32],
      }),
      uLightDirection: [Math.cos(tick * 0.001) * SIDE / 2, Math.sin(tick * 0.001) * SIDE / 2, 128],
      // Rotate all the individual cubes
      uModel: new Matrix4().rotateX(tick * 0.01).rotateY(tick * 0.013),
    })

    gl.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT)
    cube.render()
  },
})

// Make a cube with 65K instances and attributes to control offset and color of each instance
function makeInstancedCube(gl) {
  let offsets = []
  for (let i = 0; i < SIDE; i++) {
    const x = (-SIDE + 1) * 3 / 2 + i * 3
    for (let j = 0; j < SIDE; j++) {
      const y = (-SIDE + 1) * 3 / 2 + j * 3
      offsets.push(x, y)
    }
  }
  offsets = new Float32Array(offsets)
  /*
     const material = new THREE.MeshPhongMaterial({
       color: 0x110B2A,
       specular: 0x8C0112,
       emissive: 0x100C27,
       shininess: 30,
       shading: THREE.FlatShading,
       side: THREE.DoubleSide,
     });
  */

  const colors = new Float32Array(SIDE * SIDE * 3).map(
    i => [0.06640625, 0.04296875, 0.1640625][i % 3],
  )

  const { vs, fs } = {
    vs: `\
attribute vec3 positions;
attribute vec3 normals;
attribute vec2 instanceOffsets;
attribute vec3 instanceColors;

uniform mat4 uModel;
uniform mat4 uView;
uniform mat4 uProjection;
uniform float uTime;

uniform vec3 uLightDirection;

varying vec3 color;

void main(void) {
  vec3 normal = vec3(uModel * vec4(normals, 1.0));

  // Set up data for modules
  color = instanceColors;
  project_setNormal(normal);

  // Vertex position (z coordinate undulates with time), and model rotates around center
  float delta = length(instanceOffsets);
  vec4 offset = vec4(instanceOffsets, sin((uTime + delta) * 0.1) * 16.0, 0);
  gl_Position = uProjection * uView * (uModel * vec4(positions, 1.0) + offset);
}
`,
    fs: `\
#ifdef GL_ES
precision highp float;
#endif

varying vec3 color;

void main(void) {
  gl_FragColor = vec4(color, 0.9);
  gl_FragColor = dirlight_filterColor(gl_FragColor);
}
`,
  }

  return new Cube(gl, {
    vs,
    fs,
    modules: [dirlight],
    isInstanced: 1,
    instanceCount: SIDE * SIDE,
    attributes: {
      instanceOffsets: { value: offsets, size: 2, instanced: 1 },
      instanceColors: { value: colors, size: 3, instanced: 1 },
    },
  })
}

class Hero extends Component {
  componentWillUnmount() {
    this._animationStop()
  }

  _animationStart() {
    animationLoop.start({ canvas: 'lumagl-canvas' })
  }

  _animationStop() {
    animationLoop.stop({ canvas: 'lumagl-canvas' })
  }

  render() {
    return (
      <div id="hero">
        <Waypoint onEnter={this._animationStart} onLeave={this._animationStop}>
          <canvas
            id="lumagl-canvas"
            style={{
              position: 'absolute',
              height: '100%',
              top: 0,
              width: '100vw',
              zIndex: -1,
            }}
          />
        </Waypoint>
        <div className="main">
          {'Cutting edge '}
          <em>technology</em>
          {' meets beautiful '}
          <em>data visualization.</em>
        </div>
        <div className="secondary">
          Industrial-grade frameworks to supercharge your next big idea.
        </div>
      </div>
    )
  }
}

export default Hero
