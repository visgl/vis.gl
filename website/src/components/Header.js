import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cx from 'classnames'

import { toggleMenu } from 'reducers/ui'

const links = ['/docs', '/blog', '/about']

@connect(
  ({ ui: { isMenuOpen }, router: { location: { pathname } } }) => ({
    isMenuOpen,
    pathname,
  }),
  {
    toggleMenu,
  },
)
class Header extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.pathname === nextProps.pathname) {
      return
    }
    this.props.toggleMenu(false)
  }

  render() {
    const { pathname, isMenuOpen } = this.props

    return (
      <header className={cx({ open: isMenuOpen })}>
        <div className="f container ph2">
          <h1 className="fg">
            <Link to="/">{'VIS'}</Link>
          </h1>
          <div className="links f">
            {links.map(link => (
              <Link to={link} className={cx({ active: pathname.includes(link) })} key={link}>
                {link.substr(1).toUpperCase()}
              </Link>
            ))}
          </div>
          <div className="menu-toggle" onClick={() => this.props.toggleMenu(!isMenuOpen)}>
            <i className={`icon icon-${isMenuOpen ? 'close' : 'menu'}`} />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
