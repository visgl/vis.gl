import React, { Component } from 'react';
// import { connect } from 'react-redux'

import FrameworkPane from './framework-pane';
// import { fetchRepos } from 'actions/github'

const modules = [
  {
    name: 'math.gl',
    desc: 'A compact, modern, and well documented library targeting the needs of 3D graphics.',
    badges: ['react-first'],
    page: 'https://uber-web.github.io/math.gl/#/',
    url: 'uber-web/math.gl',
  },
  {
    name: 'mjolnir.js',
    desc: 'Management of browser events and gestures in a portable, modern way.',
    badges: ['javascript'],
    page: 'https://uber-web.github.io/mjolnir.js/#/',
    url: 'uber-web/mjolnir.js',
  },
  {
    displayName: 'viewport-mercator-project',
    page: 'https://uber-common.github.io/viewport-mercator-project/#/',
    desc: 'A library that collects 3D enabled web mercator projection math and tests.',
    badges: ['javascript'],
    url: 'uber-common/viewport-mercator-project',
  },
  {
    name: 'probe.gl',
    desc: 'JavaScript console instrumentation and benchmarking for browser and node.js',
    badges: ['javascript'],
    page: 'https://uber-web.github.io/probe.gl/#/',
    url: 'uber-web/probe.gl',
  },
  {
    name: 'h3',
    desc: 'A hexagonal hierarchical geospatial indexing system',
    badges: ['C'],
    page: 'https://uber.github.io/h3/#/',
    url: 'uber/h3',
  },
  {
    name: 'nebula.gl',
    desc: 'A suite of 3D-enabled data editing overlays, suitable for deck.gl',
    badges: ['javascript'],
    page: 'https://neb.gl/#/',
    url: 'uber/nebula.gl',
  },
  {
    name: 'loaders.gl',
    desc:
      'A suite of framework-independent loaders (i.e. parsers) for 3D geometries and assets, as well as geospatial formats.',
    badges: ['javascript'],
    page: 'https://uber-web.github.io/loaders.gl/#/',
    url: 'uber-web/loaders.gl',
  },
]

// {
//   name: 'ocular',
//   desc:
//     'A framework for the frameworks. This is the tool that generates the beautiful websites used by the frameworks in this suite.',
//   badges: ['javascript'],
// },
// {
//   name: 'sub-redux',
//   desc:
//     'A small system addingthings like watchers, pluggable sub-stores and test utilities to redux.',
//   badges: ['react'],
// },

class Modules extends Component {
  componentWillMount() {
    // this.props.fetchRepos(['uber-common/viewport-mercator-project'])
  }

  render() {
    return (
      <div id="modules">
        <div className="section-title section-title--no-logo">
          <h2>Our Components</h2>
          <p>Smaller projects that have been created to solve everyday tasks.</p>
        </div>
        <div className="modules">
          {modules.map((d, i) => (
            <FrameworkPane key={i} {...d} />
          ))}
        </div>
      </div>
    );
  }
}

export default Modules
