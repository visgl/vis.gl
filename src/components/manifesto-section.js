import React from 'react';
import styled from 'styled-components';
import { ContainerSm, H1, H3, Paragraph, List } from './styling/components';

/*

# Open Governance

#### vis.gl 8.4-8.5 Community Planning
#### vis.gl 8.2-8.3 Community Planning

*/

const TitleSection = styled(H1)`
  font-family: ${props => props.theme.fontFamilyLight};
  line-height: 150%;
  background: url(${props => props.backgroundImg}) no-repeat;
  min-height: 300px;
  padding-left: 200px;
  margin-top: 50px;
  padding-top: 50px;
`;

const ContributorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const OpenGovContainer = styled.div`
  .image {
    margin-top: 50px;
  }
`;
const ContributorSection = styled.div`
  display: flex;
  flex-direction: column;
  .logo-title {
    font-size: 14px;
    line-height: 110%;
    color: ${props => props.theme.gray};
    font-family: ${props => props.theme.fontFamilyLight};
  }

  .logo {
    margin-top: 30px;

    a {
      margin-right: 100px;
    }
  }

  .logo.tall {
    margin-top: 20px;
    margin-left: -18px;
  }

  :not(:first-child) {
    border-left: 1px solid ${props => props.theme.gray};
    padding-left: 40px;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SectionTitle = styled.div`
  width: 264px;
  margin-right: 20px;
  font-size: 18px;
  line-height: 20px;
  font-family: ${props => props.theme.fontFamilyMedium};
  flex-shrink: 0;
`;

const SectionContent = styled.div`
  flex-grow: 1;
`;

const ListTitle = styled.div`
  font-size: 16px;
  margin-top: 18px;
  font-family: ${props => props.theme.fontFamilyMedium};

  :first-child {
    margin-top: 0;
  }
`;

const ListItem = styled.div`
  font-size: 16px;
  color: ${props => props.theme.gray};
`;
export default function ManifestoSection({ imageResolver }) {
  console.log(imageResolver);
  return (
    <div>
      {/*
      <div className="section-title">
        <Paragraph>vis.gl</Paragraph>
        <Paragraph>GPU powered geospatial frameworks</Paragraph>
        <Paragraph>Promoting Industry Collaboration via Open Governance</Paragraph>
      </div>
      */}
      <ContainerSm>
        <TitleSection backgroundImg={imageResolver['logos/vis-logo.png']}>
          Vis.gl is a suite of composable, interoperable open source geospatial
          visualization frameworks centered around{' '}
          <a href="https://deck.gl">deck.gl</a>.
        </TitleSection>
      </ContainerSm>
      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Contribution</SectionTitle>
          <SectionContent>
            <ContributorContainer>
              <ContributorSection>
                <div className="logo-title">Lead Contributors</div>
                <div className="logo">
                  <a href="https://unfolded.ai">
                    <img
                      height="40"
                      src={imageResolver['logos/unfolded-logo.png']}
                    />
                  </a>
                  <a href="https://carto.com">
                    <img
                      height="40"
                      src={imageResolver['logos/CARTO-logo-positive.png']}
                    />
                  </a>
                </div>
              </ContributorSection>
              <ContributorSection>
                <div className="logo-title">Created By</div>
                <div className="logo tall">
                  <a href="https://uber.com/">
                    <img
                      height="60"
                      src={imageResolver['logos/uber-logo-black.jpg']}
                    />
                  </a>
                </div>
              </ContributorSection>
            </ContributorContainer>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>
      {/*
        <center>
          <H2>Sponsored By</H2>
          <a href="https://uber.com/">
            <img height="60" src={imageResolver['logos/uber-logo-black.jpg']} />
          </a>
          <span style={{ padding: 10 }} />
          <a href="https://www.here.com/">
            <img height="40" src={imageResolver['logos/here-logo.png']} />
          </a>
          <span style={{ padding: 10 }} />
          <a href="https://google.com">
            <img height="40" src={imageResolver['logos/google-logo.png']} />
          </a>
          <span style={{ padding: 10 }} />
          <a href="https://esri.com">
            <img height="40" src={imageResolver['logos/esri-logo.png']} />
          </a>
        </center>
        <br />
        */}
      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Open Governance</SectionTitle>
          <SectionContent>
            <OpenGovContainer>
              <Paragraph>
                vis.gl is under open governance, and anyone can join the open
                planning meetings. Contributor status is available and technical
                steering committee membership is available to major
                contributors.
              </Paragraph>
              <div className="image">
                <a href="https://www.linuxfoundation.org//">
                  <img
                    height="40"
                    src={imageResolver['logos/linux-foundation.svg']}
                  />
                </a>
                <span style={{ padding: 50 }} />
                <a href="https://uc.foundation/">
                  <img
                    height="40"
                    src={imageResolver['logos/ucf-color-hztl.svg']}
                  />
                </a>
              </div>
            </OpenGovContainer>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Frameworks</SectionTitle>
          <SectionContent>
            <OpenGovContainer>
              <Paragraph>
                The <a href="/frameworks">vis.gl Framework Catalog</a> provides
                an overview of the various frameworks in the vis.gl framework
                suite.
              </Paragraph>
              <img src={imageResolver['frameworks.jpg']} width="100%" />
            </OpenGovContainer>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Releases</SectionTitle>
          <SectionContent>
            <H3>vis.gl 8.4</H3>
            <Paragraph>
              <ListTitle>Release Date: Jan 31, 2021</ListTitle>
              <ListTitle>deck.gl 8.4</ListTitle>

              <ListItem>
                <a href="https://deck.gl/docs/whats-new">Release Notes</a>
              </ListItem>

              <List>
                <ListItem>TBA</ListItem>
              </List>

              <ListTitle>luma.gl 8.4</ListTitle>
              <ListItem>
                <a href="https://luma.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <List>
                <ListItem>TypeScript</ListItem>
              </List>

              <ListTitle>react-map-gl</ListTitle>
              <List>
                <ListItem>
                  react-map-gl now supports Mapbox GL JS v2, Mapbox GL JS v1,
                  and MapLibre renderers.
                </ListItem>
                <ListItem>TypeScript</ListItem>
              </List>

              <ListTitle>math.gl 3.4</ListTitle>
              <List>
                <ListItem>
                  @math.gl/geoid - New module for working with Earth Gravity
                  Models (micro-adjustments of ellipsoid)
                </ListItem>
                <ListItem>
                  @math.gl/polygon - Improved support for binary polygons
                </ListItem>
              </List>
            </Paragraph>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>History</SectionTitle>
          <SectionContent>
            <ListTitle>2020</ListTitle>
            <List>
              <ListItem>
                vis.gl Open Governance meetings started, under the auspices of
                the Linux Foundation and the UCF.
              </ListItem>
              <ListItem>
                Uber transferred a set of core vis.gl frameworks to the UCF.
              </ListItem>
            </List>
            <ListTitle>2019</ListTitle>
            <List>
              <ListItem>
                Uber created the Urban Computing Foundation (a sub-foundation of
                the Linux Foundation), transferring kepler.gl.
              </ListItem>
            </List>
            <ListTitle>2018</ListTitle>
            <List>
              <ListItem>Uber open sourced kepler.gl</ListItem>
              <ListItem>loaders.gl and nebula.gl were created.</ListItem>
            </List>
            <ListTitle>2017</ListTitle>
            <List>
              <ListItem>math.gl was created.</ListItem>
              <ListItem>probe.gl was created.</ListItem>
            </List>
            <ListTitle>2016</ListTitle>
            <ListItem>luma.gl was created.</ListItem>
            <ListTitle>2015</ListTitle>
            <List>
              <ListItem>
                The core deck.gl framework was open sourced by Uber.
              </ListItem>
              <ListItem>
                The core deck.gl framework was developed by Uber to support a
                wide range of geospatial visualization use cases across the
                company.
              </ListItem>
            </List>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>
    </div>
  );
}
