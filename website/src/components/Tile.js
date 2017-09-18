import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Odometer from 'react-odometerjs'
import PlaceLoader from 'placeloader'

import Star from 'react-icons/lib/go/star'

import { getRandom } from 'colors'

@connect(({ github }, { url }) => {
  const [org, name] = url.split('/')
  const project = github[name]
  if (!project) {
    return { org, name }
  }

  return {
    org,
    name,
    desc: project.description,
    stars: project.stargazers_count,
    contribs: project.contribs.slice(0, 5),
  }
})
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
    const { org, name } = this.props
    window.open(`https://${org}.github.io/${name}`, '_blank')
  }

  stopPropa = e => {
    e.stopPropagation()
  }

  render() {
    const { img, url, name, desc, contentStyle, titleStyle, stars, contribs } = this.props

    const style = img
      ? {
          background: `url(/${img}) top left / cover no-repeat`,
        }
      : { backgroundColor: getRandom() }

    return (
      <div style={style} className="Tile fg" onClick={this.open}>
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
