import React, { Component } from 'react'
import { connect } from 'react-redux'

import Repo from 'components/Repo'
import colors from 'colors'
import { fetchRepos } from 'actions/github'

const repos = [{
  img: 'images/deck.png',
  name: 'deck.gl',
  url: 'uber/deck.gl',
  page: 'http://uber.github.io/deck.gl/#/',
  big: true,
  desc: 'A high-performance WebGL 2 rendering framework for big data visualizations that integrates perfectly with reactive applications.',
  badges: ['react first']
}, {
  img: 'images/luma.png',
  name: 'luma.gl', 
  page: 'http://uber.github.io/luma.gl/#/',
  url: 'uber/luma.gl',
  big: true,
  desc: 'A comprehensive set of WebGL 2 components targeting high-performance rendering and GPGPU computing.',
  badges: ['pure javascript']
}, {
  img: 'images/react-map-gl.png',
  name: 'react-map-gl',
  page: 'https://uber.github.io/react-map-gl/#/',
  url: 'uber/react-map-gl',
  big: true,
  desc: 'A comprehensive React wrapper for mapbox-gl. Designed to work seamlessly as a basemap for geospatial visualizations.',
  badges: ['react only']
}, {
  img: 'images/react-vis.png',
  name: 'react-vis',
  url: 'uber/react-vis',
  page: 'https://uber.github.io/react-vis/',
  big: true,
  desc: 'A composable charting library',
  badges: ['react only']
}]

@connect(null, { fetchRepos })
class Repos extends Component {
  componentWillMount() {
    this.props.fetchRepos([
      'uber/deck.gl',
      'uber/luma.gl',
      'uber/react-map-gl',
      'uber/react-vis',
      'uber-common/viewport-mercator-project'
    ])
  }

  render() {
    return (
      <div id="repos">
        <div className="section-title">
          <h2>Our Frameworks</h2>
          <p>A suite of open-source visualization frameworks</p>
        </div>
        {repos.map((d, i) => <Repo key={i} {...d} />)}
      </div>
    )
  }
}

export default Repos;
