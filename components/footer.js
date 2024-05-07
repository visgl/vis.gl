import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Netlify from '../public/images/netlify-dark.svg';
import OpenJS from '../public/images/logos/openjsf-color-textw.svg';
import styled from '@emotion/styled';
import {breakPoints, breakpointsMediaQueries} from './styling/style';

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

const Content = styled.div`
  display: flex;
  line-height: 23px;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;

  ${breakpointsMediaQueries.lg} {
    flex-direction: column;
  }
`

const ContentItem = styled.div`
  flex: 1;
  max-width: ${breakPoints.sm}px;
`

const Logos = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ${breakpointsMediaQueries.lg} {
    justify-content: flex-start;
  }
`

const SupportLogo = ({name, src, href, width = 200, height = 25}) => (
  <SupportLogoLink href={href} target="_blank" rel="noopener noreferrer">
    <Image alt={name} src={src} height={height} width={width} objectFit="contain" />
  </SupportLogoLink>
);

export default function Footer() {
  return (
    <footer id="Footer">
        <Content>
          <ContentItem>
            <h1>
              <Link href="/">
                <a className="logo">VIS.GL</a>
              </Link>
            </h1>
            <p>
              The vis.gl framework suite is an open governance collaboration under the auspices of the
              OpenJS Foundation.
            </p>
          </ContentItem>
          <ContentItem>
            <Logos>
              <SupportLogo
                width={100}
                height={55}
                name="Supported by OpenJS"
                href="https://www.openjsf.org"
                src={OpenJS}
              />
              <SupportLogo
                width={100}
                height={55}
                name="Deploys by Netlify"
                href="https://www.netlify.com"
                src={Netlify}
              />
            </Logos>
          </ContentItem>
        </Content>
    </footer>
  );
}
