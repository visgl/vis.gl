import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import Odometer from 'react-odometerjs'
import Star from 'react-icons/lib/go/star'

import { setActive } from 'reducers/home'

@connect(
  ({ github, home: { activeRepo } }, { url }) => {
    if (!url) {
      return {}
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
    url: PropTypes.string,
  }

  open = page => {
    const { url } = this.props
    window.open(page || `https://github.com/${url}`, '_blank')
  }

  stopPropa = e => {
    e.stopPropagation()
  }

  onEnter = () => this.props.setActive(this.props.name)

  onLeave = () => this.props.setActive(null)

  render() {
    const { activeRepo, img, desc, name, stars, big } = this.props

    if (big) {
      return (
        <div className={cx('Repo', { big, opaque: activeRepo && activeRepo !== name })}>
          <div
            className="Repo-img"
            style={{ background: `url(${img}) top center / cover no-repeat` }}
            onClick={() => this.open(this.props.page)}
          />
          <div className="Repo-github">
            <h1>{name}</h1>
            {this.props.badges.map(badge => (
              <div className="badge" key={badge}>
                {badge}
              </div>
            ))}
            <div className="Repo-desc">{desc}</div>
            <div className="Repo-get-started">
              <a href={this.props.page} className="link">
                {'Get Started'}
              </a>
            </div>
            <div className="Repo-border">
              <a href={`https://github.com/${this.props.url}`} className="link">
                {'Github'}
              </a>
              <div className="Stars" onClick={() => this.open()}>
                <Star />
                <Odometer value={stars} options={{ format: '' }} />
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="Repo-github Repo small">
        <h1>{this.props.displayName || name}</h1>

        {this.props.badges.map(badge => (
          <div className="badge" key={badge}>
            {badge}
          </div>
        ))}

        {stars && (
          <div className="Stars">
            <Star />
            <Odometer value={stars} options={{ format: '' }} />
          </div>
        )}
        <div className="Repo-desc">{desc}</div>
      </div>
    )
  }
}

export default Repo
