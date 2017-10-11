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
  ({ github, home: { activeRepo } }, { url }) => {
    if (!url) {
      return {};
    }
    const [org, name] = url.split('/')
    const project = github[name]
    if (!project) {
      return { org, name, activeRepo }
    }

    return {
      org,
      activeRepo,
      description: project.description,
      stars: project.stargazers_count,
    }
  },
  {
    setActive,
  },
)
class Repo extends Component {
  static defaultProps = {
    img: null,
    contentStyle: { bottom: '1rem', left: '1rem', right: '1rem' },
    titleStyle: { fontSize: '1rem' },
    stars: 0,
    contribs: null,
  }

  static propTypes = {
    url: PropTypes.string
  }

  open = (page) => {
    const { org, name, url, useGithub } = this.props
      
     window.open(
       page || `https://github.com/${url}`,
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
      activeRepo,
      img,
      key,
      desc,
      url,
      name,
      contentStyle,
      stars,
      contribs,
      color,
      big,
    } = this.props


    if (big) {
      return (<div
        className={cx('Repo', { big, opaque: activeRepo && activeRepo !== name })}
        onClick={() => this.open(this.props.page)}
      >
        <div className="Repo-img" style={
          {background: `url(${img}) top left / cover no-repeat`}
        }/>
        <div className="Repo-github">
          <h1>{name}</h1>
          {this.props.badges.map(badge => <div
            className="badge"
            key={badge}
          >{badge}</div>)}
          <div className="Repo-get-started Repo-label">Get Started</div>
          <div className="Repo-label">Github</div>
          <div className="Stars"
            onClick={() => this.open()}
          >
            <Star />
            <Odometer value={stars} options={{ format: '' }} />
          </div>
        </div>
        <div className="Repo-desc">{desc}</div>
      </div> );
    }
    return (<div className="Repo-github Repo small">
      <h1>{this.props.displayname || name}</h1>
        {this.props.badges.map(badge => <div
          className="badge"
          key={badge}
        >{badge}</div>)}
        {stars ? <div className="Stars"
          onClick={() => this.open()}
        >
          <Star />
          <Odometer value={stars} options={{ format: '' }} />
        </div> : null}
        <div className="Repo-desc">{desc}</div>
      </div>);
  }
}

export default Repo
