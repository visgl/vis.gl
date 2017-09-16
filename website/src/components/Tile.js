import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Odometer from 'react-odometerjs'

import Star from 'react-icons/lib/go/star'

import { getRandom } from 'colors'

@connect(({ github }, { url }) => ({ stars: (github[url.split('/')[1]] || {}).stargazers_count }))
class Tile extends Component {
  static defaultProps = {
    img: null,
    contentStyle: { bottom: '1rem', left: '1rem' },
    stars: 0,
  }

  static propTypes = {
    url: PropTypes.string.isRequired,
  }

  render() {
    const { img, url, contentStyle, stars } = this.props
    const name = url.split('/')[1]

    const style = img
      ? {
          background: `url(/${img}) top left / cover no-repeat`,
        }
      : { backgroundColor: getRandom() }

    return (
      <a
        style={style}
        className="Tile fg"
        href={`https://github.com/${url}`}
        rel="noopener"
        target="_blank"
      >
        <div style={contentStyle}>
          <h1>{name}</h1>
          <div className="Stars">
            <Star />
            <Odometer value={stars} options={{ format: '' }} />
          </div>
        </div>
      </a>
    )
  }
}

export default Tile
