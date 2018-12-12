import React from 'react';
import { graphql, Link } from 'gatsby';

export default ({ data, isMenuOpen, toggleMenu, items }) => {
  // const title = data.site.siteMetadata.title
  const title = 'VIS.GL';
  return (
    <div
      onMouseOver={() => toggleMenu(true)}
      onMouseOut={() => toggleMenu(false)}
    >
      <h1>
        <a className="logo" href="/">
          {title}
        </a>
      </h1>
      <div className="site-links">
        <div className="site-link">
          <Link className="logo" to="/">{title}</Link>
        </div>
        <div>
          {items.map(({ item: { label, url } }, idx) => (
            <div className="site-link" key={idx}>
              <a href={url}>{label}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
