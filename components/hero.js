import React, {Component} from 'react';
import {luma} from '@luma.gl/core';
import {AnimationLoop, CubeGeometry, Model} from '@luma.gl/engine';
import {dirlight} from '@luma.gl/shadertools';
import {webgl2Adapter} from '@luma.gl/webgl';
import {Matrix4, radians} from 'math.gl';

const isBrowser = typeof window !== 'undefined';
const SIDE = 64;

const heroUniforms = {
  name: 'hero',
  uniformTypes: {
    model: 'mat4x4<f32>',
    view: 'mat4x4<f32>',
    projection: 'mat4x4<f32>',
    time: 'f32'
  }
};

const vs = `#version 300 es
in vec3 positions;
in vec3 normals;
in vec2 instanceOffsets;
in vec3 instanceColors;

uniform heroUniforms {
  mat4 model;
  mat4 view;
  mat4 projection;
  float time;
} hero;

out vec3 color;

void main() {
  color = instanceColors;
  dirlight_setNormal(vec3(hero.model * vec4(normals, 0.0)));
  float delta = length(instanceOffsets);
  vec4 offset = vec4(instanceOffsets, sin((hero.time + delta) * 0.1) * 16.0, 0.0);
  gl_Position = hero.projection * hero.view * (hero.model * vec4(positions, 1.0) + offset);
}
`;

const fs = `#version 300 es
precision highp float;
in vec3 color;
out vec4 fragColor;

void main() {
  fragColor = dirlight_filterColor(vec4(color, 0.9));
}
`;

async function createAnimationLoop(canvas) {
  const device = await luma.createDevice({
    adapters: [webgl2Adapter],
    type: 'webgl',
    createCanvasContext: {canvas, autoResize: true},
    webgl: {alpha: true}
  });

  const offsets = new Float32Array(SIDE * SIDE * 2);
  const colors = new Float32Array(SIDE * SIDE * 3);
  for (let i = 0; i < SIDE; i++) {
    for (let j = 0; j < SIDE; j++) {
      const index = i * SIDE + j;
      offsets.set([((-SIDE + 1) * 3) / 2 + i * 3, ((-SIDE + 1) * 3) / 2 + j * 3], index * 2);
      colors.set([0.06640625, 0.04296875, 0.1640625], index * 3);
    }
  }

  const offsetsBuffer = device.createBuffer(offsets);
  const colorsBuffer = device.createBuffer(colors);
  const cube = new Model(device, {
    id: 'homepage-cubes',
    vs,
    fs,
    modules: [heroUniforms, dirlight],
    geometry: new CubeGeometry(),
    instanceCount: SIDE * SIDE,
    bufferLayout: [
      {name: 'instanceOffsets', format: 'float32x2', stepMode: 'instance'},
      {name: 'instanceColors', format: 'float32x3', stepMode: 'instance'}
    ],
    attributes: {instanceOffsets: offsetsBuffer, instanceColors: colorsBuffer},
    parameters: {depthWriteEnabled: true, depthCompare: 'less-equal'}
  });

  const loop = new AnimationLoop({
    device,
    onRender({tick, aspect}) {
      cube.shaderInputs.setProps({
        hero: {
          time: tick * 0.1,
          projection: new Matrix4().perspective({fov: radians(60), aspect, near: 1, far: 2048}),
          view: new Matrix4().lookAt({
            center: [0, 0, 0],
            eye: [0, (Math.sin(tick * 0.006) * SIDE) / 2, 32]
          }),
          model: new Matrix4().rotateX(tick * 0.01).rotateY(tick * 0.013)
        },
        dirlight: {
          lightDirection: [
            (Math.cos(tick * 0.001) * SIDE) / 2,
            (Math.sin(tick * 0.001) * SIDE) / 2,
            128
          ]
        }
      });
      const renderPass = device.beginRenderPass({clearColor: [0, 0, 0, 0], clearDepth: 1});
      cube.draw(renderPass);
      renderPass.end();
    }
  });

  return {
    start: () => loop.start(),
    stop: () => loop.stop(),
    destroy() {
      loop.destroy();
      cube.destroy();
      offsetsBuffer.destroy();
      colorsBuffer.destroy();
      device.destroy();
    }
  };
}

class Hero extends Component {
  state = {isMounted: false};
  _canvas = React.createRef();
  _observer = null;
  _animationLoop = null;
  _initializing = false;
  _visible = false;
  _unmounted = false;

  componentDidMount() {
    this._unmounted = false;
    this.setState({isMounted: true}, () => {
      if ('IntersectionObserver' in window && this._canvas.current) {
        this._observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            this._animationStart();
          } else {
            this._animationStop();
          }
        });
        this._observer.observe(this._canvas.current);
      } else {
        this._animationStart();
      }
    });
  }

  componentWillUnmount() {
    this._unmounted = true;
    this._observer?.disconnect();
    this._animationLoop?.destroy();
    this._animationLoop = null;
  }

  _animationStart = async () => {
    this._visible = true;
    if (this._initializing) return;
    try {
      if (!this._animationLoop) {
        this._initializing = true;
        const loop = await createAnimationLoop(this._canvas.current);
        if (this._unmounted) {
          loop.destroy();
          return;
        }
        this._animationLoop = loop;
      }
      if (this._visible) await this._animationLoop.start();
    } catch (error) {
      // Keep the homepage readable when WebGL2 is unavailable.
      this._animationLoop?.destroy();
      this._animationLoop = null;
      console.warn('Homepage animation unavailable:', error);
    } finally {
      this._initializing = false;
    }
  };

  _animationStop = () => {
    this._visible = false;
    this._animationLoop?.stop();
  };

  render() {
    return (
      <div id="hero">
        {isBrowser && this.state.isMounted ? (
          <canvas
            ref={this._canvas}
            id="lumagl-canvas"
            aria-hidden="true"
            style={{
              position: 'absolute',
              height: '450px',
              top: 0,
              width: '100vw',
              background: 'transparent'
            }}
          />
        ) : null}
        <div
          style={{
            position: 'absolute',
            height: '450px',
            top: 0,
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div className="main">
            {'Open source tools for '}
            <em>geospatial</em>
            {' visualization'}
          </div>
          <div className="secondary">
            Composable frameworks for maps, graphics, and data.
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
