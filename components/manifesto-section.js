import React from 'react';
import styled from '@emotion/styled';
import {ContainerSm, H1, H3, Paragraph, List} from './styling/components';
import ImageBox from './image-box';
import {breakpointsMediaQueries} from './styling/style';
import Link from '@docusaurus/Link';

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

  ${breakpointsMediaQueries.lg} {
    padding-left: 0px;
  }
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
    color: ${props => props.theme.gray};
    font-family: ${props => props.theme.fontFamilyLight};
  }

  .logo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;
    & > * + * {
      margin-left: 30px;
      margin-top: 0px;
    }

    flex-direction: row;
    ${breakpointsMediaQueries.lg} {
      flex-direction: column;

      & > * + * {
        margin-left: 0px;
        margin-top: 10px;
      }
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
    border-left: 1px solid ${props => props.theme.gray};
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

  ${breakpointsMediaQueries.lg} {
    flex-direction: column;
  }
`;

const SectionTitle = styled.div`
  width: 264px;
  margin-right: 20px;
  font-size: 18px;
  line-height: 20px;
  font-family: ${props => props.theme.fontFamilyMedium};
  flex-shrink: 0;

  ${breakpointsMediaQueries.lg} {
    margin-bottom: 20px;
  }
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

const ReleaseTimeline = styled.ol`
  list-style: none;
  margin: 24px 0;
  padding: 0;

  li {
    border-left: 2px solid ${props => props.theme.gray};
    padding: 0 0 24px 20px;
  }

  li:last-child {
    padding-bottom: 0;
  }

  h3 {
    margin: 0 0 8px;
    font-size: 18px;
  }

  time {
    display: block;
    color: ${props => props.theme.gray};
    font-size: 14px;
    font-weight: normal;
  }
`;

// Source: “The road so far…” in the 2026 OpenVis State of the Union slides.
const DECK_RELEASE_HISTORY = [
  ['1', '2016-01', 'January 2016',
    'The first release introduced a WebGL overlay suite for maps, with a layer framework and samples.'],
  ['2', '2016-04', 'April 2016',
    'luma.gl and React integration arrived, along with ScatterplotLayer and LineLayer.'],
  ['3', '2016-11', 'November 2016',
    '64-bit precision, a shader module system, and new arc and grid layers accompanied the first publicized release and deck.gl website.'],
  ['4', '2017-04', 'April 2017',
    'WebGL2 and composite layers expanded the framework, with GeoJSON, paths, polygons, icons, point clouds, and aggregation layers.'],
  ['5', '2017-12', 'December 2017',
    'Use without React, modular @deck.gl packages, multiple views, transitions, automatic highlighting, and loading data from URLs.'],
  ['6', '2018-07', 'July 2018',
    'High-precision 32-bit projection, TextLayer, GPU aggregation, and interleaved rendering with Mapbox.'],
  ['7', '2019-04', 'April 2019',
    'loaders.gl integration enabled binary data and streaming. Layer extensions, lighting and post-processing effects, Google Maps integration, and new bitmap, heatmap, H3, and scenegraph layers broadened the toolkit.'],
  ['8', '2019-12', 'December 2019–March 2024',
    'The v8 series brought performance improvements, tiled data and terrain layers, pydeck, GlobeView, and new layer extensions, plus CARTO, ArcGIS, and interleaved Google Maps integration.'],
  ['9', '2024-03', 'March 2024',
    'TypeScript, the foundations for WebGPU support, a widget catalog, and views beyond Web Mercator marked the next generation.']
];

const GovernanceLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 30px;
  & > * + * {
    margin-left: 30px;
    margin-top: 0px;
  }

  flex-direction: row;
  ${breakpointsMediaQueries.lg} {
    flex-direction: column;

    & > * + * {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`

export default function ManifestoSection() {
  return (
    <Sections>
      <ContainerSm>
        <TitleSection backgroundImg={'/images/logos/vis-logo.png'}>
          vis.gl is an open source suite of composable frameworks for geospatial visualization,
          with projects that work independently or together around <a href="https://deck.gl">deck.gl</a>.
        </TitleSection>
      </ContainerSm>
      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Contribution</SectionTitle>
          <SectionContent>
            <Paragraph>
              vis.gl is built in the open. Contributions are welcome from individuals, companies,
              and research teams.
            </Paragraph>
            <ContributorContainer>
              <ContributorSection>
                <div className="logo-title">Lead Contributors</div>
                <div className="logo">
                  <a href="https://unfolded.ai">
                    <ImageBox
                      width={150}
                      height={60}
                      src={'/images/logos/unfolded-logo.png'}
                      alt="Unfolded"
                    />
                  </a>
                  <a href="https://carto.com">
                    <ImageBox
                      width={100}
                      height={40}
                      src={'/images/logos/CARTO-logo-positive.png'}
                      alt="CARTO"
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
                      alt="Uber"
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
            <Paragraph>
              vis.gl projects are developed in the open. Join planning meetings, contribute code,
              or help shape the technical roadmap.
            </Paragraph>
            <GovernanceLogos>
              <a href="https://www.openjsf.org/">
                <ImageBox
                  width={200}
                  height={60}
                  src={'/images/logos/openjsf-color-textg.png'}
                  alt="OpenJS Foundation"
                />
              </a>
              <a href="https://openvisualization.org/">
                <ImageBox
                  width={250}
                  height={60}
                  src={'/images/logos/openvis-logo.png'}
                  alt="Open Visualization"
                />
              </a>
            </GovernanceLogos>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Frameworks</SectionTitle>
          <SectionContent>
            <Paragraph>
              Browse the <Link href="/frameworks">vis.gl Framework Catalog</Link> to find the
              right tools for your project. Use each framework on its own or combine them.
            </Paragraph>
            <img
              style={{width: '100%', height: 'auto', objectFit: 'cover'}}
              src={'/images/frameworks.jpg'}
              height={720}
              width={1080}
              alt=""
            />
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Releases</SectionTitle>
          <SectionContent>
            <H3>In development</H3>
            <Paragraph>
              <ListTitle>math.gl 5.0</ListTitle>
              <ListItem>
                Prerelease development is underway. See the{' '}
                <a href="/math.gl/docs/whats-new">release notes</a>.
              </ListItem>
            </Paragraph>
            <H3>Latest stable releases</H3>
            <H3>vis.gl 9.0</H3>
            <Paragraph>
              <ListTitle>Release Date: Mar 21, 2024</ListTitle>
              <ListTitle>deck.gl 9.0</ListTitle>

              <ListItem>
                <a href="https://deck.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <div style={{marginTop: 5}} />

              <ListTitle>luma.gl 9.0</ListTitle>
              <ListItem>
                <a href="https://luma.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <div style={{marginTop: 5}} />

              <ListTitle>math.gl 4.0</ListTitle>
              <ListItem>
                <a href="/math.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <div style={{marginTop: 5}} />

              <ListTitle>loaders.gl 4.2</ListTitle>
              <ListItem>
                <a href="https://loaders.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <div style={{marginTop: 5}} />
            </Paragraph>
            <H3>react-map-gl 7.1</H3>
            <Paragraph>
              <ListTitle>Release Date: Jun 30, 2023</ListTitle>
              <ListItem>
                <a href="https://visgl.github.io/react-map-gl/docs/whats-new">Release Notes</a>
              </ListItem>
            </Paragraph>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer id="deck-gl-release-history">
          <SectionTitle as="h2">deck.gl release history</SectionTitle>
          <SectionContent>
            <Paragraph>
              From WebGL map overlays to a framework for large-scale visualization, each major
              release expanded what developers could build with deck.gl.
            </Paragraph>
            <ReleaseTimeline aria-label="deck.gl major releases">
              {DECK_RELEASE_HISTORY.map(([version, date, label, summary]) => (
                <li key={version}>
                  <h3>
                    deck.gl {version}
                    <time dateTime={date}>{label}</time>
                  </h3>
                  <Paragraph>{summary}</Paragraph>
                </li>
              ))}
            </ReleaseTimeline>
            <Paragraph>
              Adapted from the{' '}
              <a href="https://docs.google.com/presentation/d/18st07cfMUvkTpe2a7VeoTL18HIgQpOYxakH03CHVTiw/edit#slide=id.g3f9dcc3bfa0_0_30">
                2026 State of the Union slides
              </a>{' '}
              presented at the{' '}
              <a href="https://www.openvisualization.org/summits/zurich-summit-2026">
                Open Visualization Collaborator Summit in Zürich
              </a>. For changes within each release, see the{' '}
              <a href="https://deck.gl/docs/whats-new">deck.gl release notes</a>.
            </Paragraph>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>History</SectionTitle>
          <SectionContent>
            <ListTitle>2026</ListTitle>
            <List>
              <ListItem>math.gl 5.0 entered prerelease development.</ListItem>
              <ListItem>math.gl documentation moved to vis.gl/math.gl.</ListItem>
            </List>
            <ListTitle>2024</ListTitle>
            <List>
              <ListItem>react-google-maps was created.</ListItem>
            </List>
            <ListTitle>2023</ListTitle>
            <List>
              <ListItem><a href="https://deck.gl/events/new-york-summit-2023/">Open Visualization Collaborator Summit</a> held in New York.</ListItem>
            </List>
            <ListTitle>2022</ListTitle>
            <List>
              <ListItem>First annual <a href="https://deck.gl/events/madrid-summit-2022/">Open Visualization Collaborator Summit</a> held in Madrid.</ListItem>
              <ListItem>flowmap.gl joined the vis.gl project.</ListItem>
              <ListItem>vis.gl and kepler.gl joined the <a href="https://openjsf.org/">OpenJS Foundation</a>.</ListItem>
              <ListItem>Urban Computing Foundation merged with the OpenJS Foundation.</ListItem>
              <ListItem>The <a href="https://www.openvisualization.org/">Open Visualization Collaboration Group</a> formed.</ListItem>
            </List>
            <ListTitle>2020</ListTitle>
            <List>
              <ListItem>vis.gl Open Governance meetings began under the Linux Foundation and UCF.</ListItem>
              <ListItem>Uber transferred a set of core vis.gl frameworks to the UCF.</ListItem>
              <ListItem>hubble.gl was created.</ListItem>
            </List>
            <ListTitle>2019</ListTitle>
            <List>
              <ListItem>Uber created the Urban Computing Foundation and transferred kepler.gl.</ListItem>
            </List>
            <ListTitle>2018</ListTitle>
            <List>
              <ListItem>Uber open sourced kepler.gl.</ListItem>
              <ListItem>loaders.gl and nebula.gl were created.</ListItem>
            </List>
            <ListTitle>2017</ListTitle>
            <List>
              <ListItem>math.gl and probe.gl were created.</ListItem>
            </List>
            <ListTitle>2016</ListTitle>
            <List><ListItem>luma.gl was created.</ListItem></List>
            <ListTitle>2015</ListTitle>
            <List>
              <ListItem>Uber open sourced the core deck.gl framework.</ListItem>
              <ListItem>Uber developed deck.gl for geospatial visualization.</ListItem>
            </List>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>
    </Sections>
  );
}
