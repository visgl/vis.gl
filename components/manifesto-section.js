import React from 'react';
import styled from '@emotion/styled';
import { ContainerSm, H1, H3, Paragraph, List } from './styling/components';
import Image from 'next/image';
import ImageBox from './image-box';

/*

# Open Governance

#### vis.gl 8.4-8.5 Community Planning
#### vis.gl 8.2-8.3 Community Planning

*/

const TitleSection = styled(H1)`
  font-family: ${(props) => props.theme.fontFamilyLight};
  line-height: 150%;
  background: url(${(props) => props.backgroundImg}) no-repeat;
  min-height: 300px;
  padding-left: 200px;
  margin-top: 50px;
  padding-top: 50px;
`;

const ContributorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const ContributorSection = styled.div`
  display: flex;
  flex-direction: column;
  .logo-title {
    font-size: 14px;
    line-height: 110%;
    color: ${(props) => props.theme.gray};
    font-family: ${(props) => props.theme.fontFamilyLight};
  }

  .logo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;
    & > * + * {
      margin-left: 30px;
    }
  }

  .logo.tall {
    margin-top: 20px;
    margin-left: -18px;
  }

  :first-child {
    padding-right: 40px;
  }
  :not(:first-child) {
    border-left: 1px solid ${(props) => props.theme.gray};
    padding-left: 40px;
  }
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 50px;
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
  font-family: ${(props) => props.theme.fontFamilyMedium};
  flex-shrink: 0;
`;

const SectionContent = styled.div`
  flex-grow: 1;
`;

const ListTitle = styled.div`
  font-size: 16px;
  margin-top: 18px;
  font-family: ${(props) => props.theme.fontFamilyMedium};

  :first-child {
    margin-top: 0;
  }
`;

const ListItem = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.gray};
`;

export default function ManifestoSection() {
  return (
    <Sections>
      <ContainerSm>
        <TitleSection backgroundImg={'/images/logos/vis-logo.png'}>
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
                    <ImageBox
                      width={150}
                      height={60}
                      src={'/images/logos/unfolded-logo.png'}
                    />
                  </a>
                  <a href="https://carto.com">
                    <ImageBox
                      width={100}
                      height={40}
                      src={'/images/logos/CARTO-logo-positive.png'}
                    />
                  </a>
                </div>
              </ContributorSection>
              <ContributorSection>
                <div className="logo-title">Created By</div>
                <div className="logo tall">
                  <a href="https://uber.com/">
                    <ImageBox
                      width={100}
                      height={60}
                      src={'/images/logos/uber-logo-black.jpg'}
                    />
                  </a>
                </div>
              </ContributorSection>
            </ContributorContainer>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Open Governance</SectionTitle>
          <SectionContent>
            <ContributorContainer>
              <ContributorSection>
                <Paragraph>
                  vis.gl is under open governance, and anyone can join the open
                  planning meetings. Contributor status is available and
                  technical steering committee membership is available to major
                  contributors.
                </Paragraph>
                <div className="logo">
                  <a href="https://www.linuxfoundation.org//">
                    <ImageBox
                      width={200}
                      height={40}
                      src={'/images/logos/linux-foundation.svg'}
                    />
                  </a>
                  <a href="https://uc.foundation/">
                    <ImageBox
                      width={250}
                      height={40}
                      src={'/images/logos/ucf-color-hztl.svg'}
                    />
                  </a>
                </div>
              </ContributorSection>
            </ContributorContainer>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Frameworks</SectionTitle>
          <SectionContent>
            <ContributorContainer>
              <ContributorSection>
                <Paragraph>
                  The <a href="/frameworks.tsx">vis.gl Framework Catalog</a>{' '}
                  provides an overview of the various frameworks in the vis.gl
                  framework suite.
                </Paragraph>
                <ImageBox
                  src={'/images/frameworks.jpg'}
                  width={600}
                  height={400}
                />
              </ContributorSection>
            </ContributorContainer>
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
              <div style={{ marginTop: 5 }} />
              <List>
                <ListItem>
                  MVTLayer - 2x performance via binary mode. TileJSON. Query
                  Features.
                </ListItem>
                <ListItem>
                  HeatmapLayer - GPU aggregations now include MEAN and SUM
                </ListItem>
                <ListItem>BitmapLayer - pixel picking</ListItem>
                <ListItem>
                  All Layers - performance, rendering edge cases
                </ListItem>
                <ListItem>
                  Interaction - mobile improvments, new gesture for 3D
                  interaction, inertia
                </ListItem>
                <ListItem>
                  loaders.gl integration - More control of loader autoselection
                </ListItem>
                <ListItem>
                  @deck.gl/carto - enables data-driven map visualizations using
                  CARTOColors
                </ListItem>
              </List>

              <ListTitle>luma.gl 8.4</ListTitle>
              <ListItem>
                <a href="https://luma.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <div style={{ marginTop: 5 }} />
              <List>
                <ListItem>
                  <b>TypeScript</b> - types are now exported
                </ListItem>
              </List>

              <ListTitle>react-map-gl v6.1</ListTitle>
              <ListItem>
                <a href="https://visgl.github.io/react-map-gl/docs/whats-new">
                  Release Notes
                </a>
              </ListItem>
              <div style={{ marginTop: 5 }} />
              <List>
                <ListItem>
                  Choose your mapbox API compatible rendering library: Mapbox GL
                  JS v2, Mapbox GL JS v1, MapLibre.
                </ListItem>
                <ListItem>
                  <b>TypeScript</b> - types are now exported
                </ListItem>
              </List>

              <ListTitle>math.gl 3.4</ListTitle>
              <ListItem>
                <a href="https://math.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <div style={{ marginTop: 5 }} />
              <List>
                <ListItem>
                  @math.gl/geoid - New module for working with Earth Gravity
                  Models
                </ListItem>
                <ListItem>
                  @math.gl/polygon - Improved support for binary polygons
                </ListItem>
              </List>

              <ListTitle>loaders.gl 2.3</ListTitle>
              <ListItem>
                <a href="https://loaders.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <div style={{ marginTop: 5 }} />
              <List>
                <ListItem>
                  loaders.gl is still on v2.3. The big 3.0 release is targeting
                  vis.gl 8.5.
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
    </Sections>
  );
}
