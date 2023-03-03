import React from 'react';
import classNames from 'classnames';

export default function LinkWithArrow({ label, url, className }) {
  return (
    <a className={classNames('link-with-arrow', className)} href={url}>
      <span className="label">{label}</span>
      <Arrow />
    </a>
  );
}

function Arrow() {
  return (
    <svg
      className="arrow"
      width="21"
      height="13"
      viewBox="0 0 21 13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8 5.143H0v1.714h17.14l-4.283 4.283 1.2 1.2 5.998-5.997-.173-.172.173-.172L14.058 0l-1.2 1.2 3.94 3.943z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}
