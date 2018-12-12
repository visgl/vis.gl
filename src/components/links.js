import React, { Component } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

class Links extends Component {
  render() {
    const { items, page } = this.props;
    return (
      <div className="links f">
        {items.map(({ item }, idx) => {
          const isActive = item.route && stripLeadingSlash(item.route) === page;
          return item.route ? (
            <Link
              to={item.route}
              key={idx}
              className={classNames({ active: isActive })}
            >
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
  }
}

function stripLeadingSlash(route) {
  if (route.startsWith('/')) {
    return route.slice(1);
  }
  return route;
}

export default Links;
