import React from 'react';
import classNames from 'classnames';
import Link from '@docusaurus/Link';

const Links = props => {
  const currentPath = typeof window === 'undefined' ? '/' : window.location.pathname;
  const {items} = props;
  return (
    <div className="links f">
      {items.map(({item}, idx) => {
        const isActive = item.route && item.route === currentPath;
        return item.route ? (
          <Link href={item.route} key={idx} className={classNames({active: isActive})}>
            {item.label}
          </Link>
        ) : (
          <a href={item.url} key={idx}>
            {item.label}
          </a>
        );
      })}
    </div>
  );
};

export default Links;
