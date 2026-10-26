import React from 'react';
import styled from '@emotion/styled';
import {ContainerSm, H1, Paragraph, List} from './styling/components';
import {breakpointsMediaQueries} from './styling/style';

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

// Historical releases: “The road so far…” in the 2026 OpenVis State of the Union slides.
const DECK_RELEASE_HISTORY = [
  ['10', '2026', 'End of 2026 (planned)',
    'Built on luma.gl 10, loaders.gl 5, and math.gl 5. Planned highlights include WebGPU-optimized rendering, end-to-end binary columnar data and Apache Arrow support, a GPU graph compute framework, and state-of-the-art CRS and map projection support.'],
  ['9', '2024-03', 'March 2024',
    'TypeScript, the foundations for WebGPU support, a widget catalog, and views beyond Web Mercator marked the next generation.'],
  ['8', '2019-12', 'December 2019–March 2024',
    'The v8 series brought performance improvements, tiled data and terrain layers, pydeck, GlobeView, and new layer extensions, plus CARTO, ArcGIS, and interleaved Google Maps integration.'],
  ['7', '2019-04', 'April 2019',
    'loaders.gl integration enabled binary data and streaming. Layer extensions, lighting and post-processing effects, Google Maps integration, and new bitmap, heatmap, H3, and scenegraph layers broadened the toolkit.'],
  ['6', '2018-07', 'July 2018',
    'High-precision 32-bit projection, TextLayer, GPU aggregation, and interleaved rendering with Mapbox.'],
  ['5', '2017-12', 'December 2017',
    'Use without React, modular @deck.gl packages, multiple views, transitions, automatic highlighting, and loading data from URLs.'],
  ['4', '2017-04', 'April 2017',
    'WebGL2 and composite layers expanded the framework, with GeoJSON, paths, polygons, icons, point clouds, and aggregation layers.'],
  ['3', '2016-11', 'November 2016',
    '64-bit precision, a shader module system, and new arc and grid layers accompanied the first publicized release and deck.gl website.'],
  ['2', '2016-04', 'April 2016',
    'luma.gl and React integration arrived, along with ScatterplotLayer and LineLayer.'],
  ['1', '2016-01', 'January 2016',
    'The first release introduced a WebGL overlay suite for maps, with a layer framework and samples.']
];

const RELEASE_LINKS = {
  '9': [
    ['Release notes', 'https://deck.gl/docs/whats-new#deckgl-v90']
  ],
  '8': [
    ['Release notes', 'https://deck.gl/docs/whats-new#deckgl-v80'],
    ['Open governance blog post', 'https://medium.com/vis-gl/deck-gl-8-2-moves-to-open-governance-379f147c15bb']
  ],
  '7': [
    ['Release notes', 'https://deck.gl/docs/whats-new#deckgl-v70'],
    ['Introducing deck.gl v7.0', 'https://medium.com/vis-gl/introducing-deck-gl-v7-0-c18bcb717457']
  ],
  '6': [
    ['Release notes', 'https://deck.gl/docs/whats-new#deckgl-v60'],
    ['GPU aggregation blog post', 'https://medium.com/vis-gl/gpu-accelerated-aggregation-in-deck-gl-7e2c7d701fb0']
  ],
  '5': [['Release notes', 'https://deck.gl/docs/whats-new#deckgl-v5']],
  '4': [
    ['Release notes', 'https://deck.gl/docs/whats-new#deckgl-v40'],
    ['Introducing deck.gl v4.0', 'https://medium.com/vis-gl/introducing-deck-gl-v4-0-3ead9106eb7e']
  ],
  '3': [
    ['Release notes', 'https://deck.gl/docs/whats-new#deckgl-v30'],
    ['Launch blog post', 'https://www.uber.com/us/en/blog/visualizing-data-sets-deck-gl-framework/']
  ],
  '2': [['Release notes', 'https://deck.gl/docs/whats-new#deckgl-v2']],
  '1': [['Release notes', 'https://deck.gl/docs/whats-new#deckgl-v1']]
};

export default function History() {
  return (
    <Sections>
      <ContainerSm>
        <H1 as="h1">vis.gl release history</H1>
        <Paragraph>
          Explore the milestones and major releases that shaped the vis.gl frameworks,
          from the most recent developments back to their origins.
        </Paragraph>
      </ContainerSm>
      <ContainerSm>
        <SectionContainer>
          <SectionTitle as="h2">vis.gl milestones</SectionTitle>
          <SectionContent>
            <ListTitle>2027</ListTitle>
            <List>
              <ListItem>
                The sixth{' '}
                <a href="https://www.openvisualization.org/summits/chicago-summit-2027">
                  Open Visualization Collaborator Summit
                </a>{' '}
                is planned for Chicago in September 2027.
              </ListItem>
            </List>
            <ListTitle>2026</ListTitle>
            <List>
              <ListItem>
                The fifth{' '}
                <a href="https://www.openvisualization.org/summits/zurich-summit-2026">
                  Open Visualization Collaborator Summit
                </a>{' '}
                held at ETH Zürich on September 9–10.
              </ListItem>
              <ListItem>
                vis.gl v10 entered prerelease development.
              </ListItem>
            </List>
            <ListTitle>2025</ListTitle>
            <List>
              <ListItem>
                The fourth{' '}
                <a href="https://www.openvisualization.org/summits/seattle-summit-2025">
                  Open Visualization Collaborator Summit
                </a>{' '}
                held at Google’s South Lake Union office in Seattle on October 8–9.
              </ListItem>
            </List>
            <ListTitle>2024</ListTitle>
            <List>
              <ListItem>
                The third{' '}
                <a href="https://www.openvisualization.org/summits/london-summit-2024">
                  Open Visualization Collaborator Summit
                </a>{' '}
                held at Microsoft Reactor in London on September 10–11.
              </ListItem>
              <ListItem>
                vis.gl 9.0 brought major releases of deck.gl and luma.gl.{' '}
                <a href="https://deck.gl/docs/whats-new#deckgl-v90">deck.gl release notes</a>{' '}and{' '}
                <a href="https://luma.gl/docs/whats-new">luma.gl release notes</a>.
              </ListItem>
              <ListItem>react-google-maps was created.</ListItem>
            </List>
            <ListTitle>2023</ListTitle>
            <List>
              <ListItem>The second <a href="https://www.openvisualization.org/summits/new-york-summit-2023">Open Visualization Collaborator Summit</a> held at Foursquare in New York on September 6–7.</ListItem>
            </List>
            <ListTitle>2022</ListTitle>
            <List>
              <ListItem>The first <a href="https://www.openvisualization.org/summits/madrid-summit-2022">Open Visualization Collaborator Summit</a> held at CARTO in Madrid on September 22–23.</ListItem>
              <ListItem>flowmap.gl joined the vis.gl project.</ListItem>
              <ListItem>
                vis.gl and kepler.gl joined the <a href="https://openjsf.org/">OpenJS Foundation</a>{' '}
                through its merger with the Urban Computing Foundation.
              </ListItem>
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
              <ListItem>
                math.gl and probe.gl were created.{' '}
                <a href="https://medium.com/vis-gl/the-birth-of-a-visualization-framework-suite-958049647e89">
                  The Birth of a Visualization Framework Suite
                </a>.
              </ListItem>
            </List>
            <ListTitle>2016</ListTitle>
            <List><ListItem>luma.gl was created.</ListItem></List>
            <ListTitle>2015</ListTitle>
            <List>
              <ListItem>Uber developed and open sourced deck.gl for geospatial visualization.</ListItem>
            </List>
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
                  {RELEASE_LINKS[version] && <Paragraph>
                    {RELEASE_LINKS[version].map(([label, href], index) => (
                      <React.Fragment key={href}>
                        {index > 0 && ' · '}
                        <a href={href}>{label}</a>
                      </React.Fragment>
                    ))}
                  </Paragraph>}
                </li>
              ))}
            </ReleaseTimeline>
            <Paragraph>
              Historical entries adapted from the{' '}
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

    </Sections>
  );
}
