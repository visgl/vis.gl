import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Netlify from '../public/images/netlify-dark.svg';
import styled from '@emotion/styled';

const SupportLogoLink = styled.a`
  position: relative;
  margin-top: 20px;
  margin-right: 35px;
  margin-bottom: 20px;
  //top: 0.14em;
  transition: opacity 0.2s;
  opacity: 0.6;
  //margin: 0 22px;
  &:hover {
    opacity: 1;
  }
`;

const SupportLogo = ({name, src, href, width = 200, height = 25}) => (
  <SupportLogoLink href={href} target="_blank" rel="noopener noreferrer">
    <Image alt={`Supported by ${name}`} src={src} height={height} width={width} />
  </SupportLogoLink>
);

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
          <div style={{position: 'absolute', right: 50}}>
            <SupportLogo
              width={100}
              height={55}
              name="Deploys by Netlify"
              href="https://www.netlify.com"
              src={Netlify}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
