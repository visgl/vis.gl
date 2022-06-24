import React from 'react';
import Link from 'next/link';

const title = 'VIS.GL';

const Menu = ({toggleMenu, items}) => {
  return (
    <div onMouseOver={() => toggleMenu(true)} onMouseOut={() => toggleMenu(false)}>
      <h1 className="title-link">
        <Link href="/">{title}</Link>
      </h1>
      <div className="site-links">
        <div className="site-link">
          <Link href="/">
            <a className="logo">{title}</a>
          </Link>
        </div>
        <div>
          {items.map(({item: {label, url}}, idx) => (
            <div className="site-link" key={idx}>
              <Link href={url}>{label}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
