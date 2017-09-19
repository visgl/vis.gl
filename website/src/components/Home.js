import React, { Component } from 'react'
import { connect } from 'react-redux'

import Tile from 'components/Tile'

import colors from 'colors'
import { fetchRepos } from 'actions/github'

@connect(null, { fetchRepos })
class Home extends Component {
  componentWillMount() {
    this.props.fetchRepos([
      'uber/deck.gl',
      'uber/luma.gl',
      'uber/react-map-gl',
      'uber-common/viewport-mercator-project',
      'uber-web/seer',
      'ibgreen/math.gl',
      'ibgreen/mjolnir.js',
      'Apercu/ocular',
    ])
  }

  render() {
    return (
      <div className="fg fcol ph container">
        <Tile img="images/deck.png" url="uber/deck.gl" />
        <Tile
          contentStyle={{ bottom: '1rem', right: '1rem', textAlign: 'right' }}
          img="images/luma.png"
          url="uber/luma.gl"
        />
        <Tile img="images/react-map-gl.png" url="uber/react-map-gl" />

        <div className="f fw">
          <Tile url="ibgreen/math.gl" color={colors.uber_blue} />
          <Tile url="ibgreen/mjolnir.js" useGithub color={colors.portage} />
          <Tile
            useGithub
            url="uber-common/viewport-mercator-project"
            titleStyle={{ fontSize: '0.7rem' }}
            color={colors.flame}
          />
        </div>

        <div className="f fw">
          <Tile url="Apercu/ocular" useGithub color={colors.sapphire} />
          <Tile url="uber-web/Seer" useGithub color={colors.chathams_blue} />
        </div>
      </div>
    )
  }
}

export default Home
