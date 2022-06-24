import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="Footer">
      <div className="content">
        <div className="main">
          <h1>
            <Link href="/">
              <a className="logo">VIS.GL</a>
            </Link>
          </h1>
          <p>
            The vis.gl framework suite is an open governance collaboration under the auspices of the
            UCF and Linux Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
}
