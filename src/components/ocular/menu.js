import React from 'react'
import { graphql, Link } from 'gatsby'

export default ({ data, isMenuOpen, toggleMenu, items }) => {
  const title = data.site.siteMetadata.title
  return (
    <div
      onMouseOver={() => toggleMenu(true)}
      onMouseOut={() => toggleMenu(false)}
    >
      <a className="logo" href="#">
        {title}
      </a>
      <div className="site-links">
        <div className="site-link">
          <Link to="/">{title}</Link>
        </div>
        <div>
          {items.map(({ label, url }, i) => (
            <div className="site-link" key={i}>
              <a href={url}>{label}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
