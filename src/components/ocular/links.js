import React, { Component } from 'react'
import { Link } from 'gatsby'

class Links extends Component {
  render() {
    const { links, thisRoute } = this.props
    return (
      <div classNames="links f">
        {links.map((link, idx) =>
          link.route ? (
            link.route === thisRoute ? null : (
              <Link to={link.route} key={idx}>
                {link.label}
              </Link>
            )
          ) : (
            <a href={link.url} key={link.idx}>
              {link.label}
            </a>
          )
        )}
      </div>
    )
  }
}

export default Links
