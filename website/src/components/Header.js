import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const links = ['/docs', '/blog', '/about']

class Header extends Component {
  render() {
    return (
      <header>
        <div className="f container">
          <h1 className="fg">{'VIS'}</h1>
          {links.map(link => (
            <Link to={link} key={link}>
              {link.substr(1).toUpperCase()}
            </Link>
          ))}
        </div>
      </header>
    )
  }
}

export default Header
