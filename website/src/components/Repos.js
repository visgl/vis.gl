import React, { Component } from 'react'
import { connect } from 'react-redux'

import Repo from 'components/Repo'
import colors from 'colors'
import { fetchRepos } from 'actions/github'

const repos = [{
  img: 'images/deck.png',
  url: 'uber/deck.gl',
  page: 'http://uber.github.io/deck.gl/#/',
  big: true,
  desc: 'A high performance WebGL 2 rendering framework for big data visualizations that integrates perfectly with reactive applications.',
  badges: ['react first']
}, {
  img: 'images/luma.png',
  page: 'http://uber.github.io/luma.gl/#/',
  url: 'uber/luma.gl',
  big: true,
  desc: 'A comprehensive set of WebGL 2 components targeting high-performance rendering and GPGPU computing.',
  badges: ['pure javascript']
}, {
  img: 'images/react-map-gl.png',
  page: 'https://uber.github.io/react-map-gl/#/',
  url: 'uber/react-map-gl',
  big: true,
  desc: 'A comprehensive React wrapper for mapbox-gl. Designed to work seamlessly as a basemap for geospatial visualizations.',
  badges: ['react only']
}, {
  img: 'images/react-vis.png',
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
      'uber-common/viewport-mercator-project',
      'uber-web/seer',
      'ibgreen/math.gl',
      'ibgreen/mjolnir.js',
      'Apercu/ocular',
    ])
  }

  render() {
    return (
      <div id="repos">
        <div className="section-title">
          <h2>Our Frameworks</h2>
          <p>A suite of open-source visualization frameworks</p>
        </div>
        {repos.map(d => <Repo key={d.name} {...d} />)}
      </div>
    )
  }
}

export default Repos;



// @connect(null, { fetchRepos })
// class Home extends Component {
//   componentWillMount() {
//     this.props.fetchRepos([
//       'uber/deck.gl',
//       'uber/luma.gl',
//       'uber/react-map-gl',
//       'uber-common/viewport-mercator-project',
//       'uber-web/seer',
//       'ibgreen/math.gl',
//       'ibgreen/mjolnir.js',
//       'Apercu/ocular',
//     ])
//   }

//   render() {
//     return (
//       <div id="repos">


//         <Tile img="images/deck.png" url="uber/deck.gl" big />
//         <Tile
//           contentStyle={{ bottom: '1rem', right: '1rem', textAlign: 'right' }}
//           img="images/luma.png"
//           url="uber/luma.gl"
//           big
//         />
//         <Tile img="images/react-map-gl.png" url="uber/react-map-gl" big />

//         <div className="f fw">
//           <Tile url="ibgreen/math.gl" color={colors.uber_blue} />
//           <Tile url="ibgreen/mjolnir.js" useGithub color={colors.portage} />
//           <Tile
//             useGithub
//             url="uber-common/viewport-mercator-project"
//             titleStyle={{ fontSize: '0.7rem' }}
//             color={colors.flame}
//           />
//         </div>

//         <div className="f fw">
//           <Tile url="Apercu/ocular" useGithub color={colors.sapphire} />
//           <Tile url="uber-web/Seer" useGithub color={colors.chathams_blue} />
//         </div>
//       </div>
//     )
//   }
// }

// export default Home
