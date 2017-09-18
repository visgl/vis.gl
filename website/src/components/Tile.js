import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import Odometer from 'react-odometerjs'
import PlaceLoader from 'placeloader'

import Star from 'react-icons/lib/go/star'

import { setActive } from 'reducers/home'

import { getRandom } from 'colors'

@connect(
  ({ github, home: { activeTile } }, { url }) => {
    const [org, name] = url.split('/')
    const project = github[name]
    if (!project) {
      return { org, name, activeTile }
    }

    return {
      org,
      name,
      activeTile,
      desc: project.description,
      stars: project.stargazers_count,
      contribs: project.contribs.slice(0, 5),
    }
  },
  {
    setActive,
  },
)
class Tile extends Component {
  static defaultProps = {
    img: null,
    contentStyle: { bottom: '1rem', left: '1rem', right: '1rem' },
    titleStyle: { fontSize: '1rem' },
    stars: 0,
    contribs: null,
  }

  static propTypes = {
    url: PropTypes.string.isRequired,
  }

  open = () => {
    const { org, name, url, useGithub } = this.props
    window.open(
      useGithub ? `https://github.com/${url}` : `https://${org}.github.io/${name}`,
      '_blank',
    )
  }

  stopPropa = e => {
    e.stopPropagation()
  }

  onEnter = () => this.props.setActive(this.props.name)

  onLeave = () => this.props.setActive(null)

  render() {
    const {
      activeTile,
      img,
      url,
      name,
      desc,
      contentStyle,
      titleStyle,
      stars,
      contribs,
      color,
    } = this.props

    const style = img
      ? {
          background: `url(/${img}) top left / cover no-repeat`,
        }
      : { backgroundColor: color }

    return (
      <div
        style={style}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        className={cx('Tile fg', { opaque: activeTile && activeTile !== name })}
        onClick={this.open}
      >
        <div className="Tile-main" style={contentStyle}>
          <div className="Tile-desc">{desc}</div>
          <div>
            <h1 style={titleStyle}>{name}</h1>
            <div className="Stars">
              <Star />
              <Odometer value={stars} options={{ format: '' }} />
            </div>
          </div>
        </div>
        <div className="f Tile-contribs">
          {contribs ? (
            contribs.map(contrib => (
              <a onClick={this.stopPropa} href={contrib.html_url} target="_blank" key={contrib.id}>
                <img src={contrib.avatar_url} />
              </a>
            ))
          ) : (
            [...Array(5)].map((_, i) => (
              <PlaceLoader
                className="Tile-contrib-load"
                style={{ width: '2rem', height: '2rem' }}
                isLoading
                key={i}
              />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Tile
