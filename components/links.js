import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Links = props => {
  const router = useRouter();
  const {items, page} = props;
  return (
    <div className="links f">
      {items.map(({item}, idx) => {
        const isActive = item.route && item.route === router.pathname;
        return item.route ? (
          <Link href={item.route} key={idx}>
            <a className={classNames({active: isActive})}>{item.label}</a>
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
