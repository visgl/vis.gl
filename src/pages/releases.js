import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import { ContainerSm, H1, H3, Paragraph, List } from '../components/styling/components';

const TitleSection = styled(H1)`
  font-family: ${props => props.theme.fontFamilyLight};
  line-height: 150%;
  background: url(${props => props.backgroundImg}) no-repeat;
  min-height: 300px;
  padding-left: 200px;
  margin-top: 50px;
  padding-top: 50px;
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

const ListItem = styled.li`
  margin-left: 20px;
  font-size: 16px;
`;

const Releases = ({imageResolver}) => {
  return (
    <ContainerSm>
    <div style={{marginTop: 150}} />
    <SectionContainer>
      <SectionTitle>Releases</SectionTitle>
      <SectionContent>
      <H1>vis.gl 8.6</H1>
        <Paragraph>
          <ListTitle>Theme: Support for Google Vector Maps</ListTitle>
          <ListTitle>Release Date: October 11, 2021</ListTitle>
          <ListTitle> <a href="https://deck.gl/docs/whats-new">deck.gl 8.6</a></ListTitle>
          <div style={{marginTop: 5}} />
          <List>
            <ListItem>Google Vector Maps - deck.gl now supports interleaved rendering</ListItem>
            <ListItem>OrthgraphicView - Independent X/Y zoom</ListItem>
            <ListItem>MapView - Meter sizes</ListItem>
            <ListItem>ColumnLayer and GridCellLayer add radiusUnits prop.</ListItem>
            <ListItem>H3HexagonLayer now supports manually forcing low-precision, high-performance rendering with highPrecision: false.</ListItem>
            <ListItem>HeatmapLayer adds weightsTextureSize and debounceTimeout props for fine-tuning performance.</ListItem>
            <ListItem>MVTLayer now defaults to handling geometries in binary.</ListItem>
            <ListItem>Scatterplot and GeoJsonLayer add option to turn off antialiasing to avoid artifacts in depth oclusion.</ListItem>
            <ListItem>TileLayer no longer purges its cache when data changes, resulting in a smoother "reload" experience</ListItem>
          </List>
        </Paragraph>

        <H1>vis.gl 8.5</H1>
        <Paragraph>
          <ListTitle>Theme: Support for Google Vector Maps</ListTitle>
          <ListTitle>Release Date: July 26, 2021</ListTitle>
          <ListTitle> <a href="https://deck.gl/docs/whats-new">deck.gl 8.5</a></ListTitle>
          <div style={{marginTop: 5}} />

          <List>
          <ListItem>ScatterplotLayer adds billboard mode</ListItem>
          <ListItem>TripLayer adds fadeTrail mode</ListItem>
          <ListItem>PathLayer now supports controlling jointRounded and capRounded separately. Dashed lines via PathStyleExtension also respects the cap type.</ListItem>
          <ListItem>PolygonLayer and GeoJsonLayer: autoHighlight now highlight both the outline and the fill of the hovered polygon, instead of either the outline or the fill.</ListItem>
          <ListItem>HeatmapLayer now correctly renders aggregation: 'MEAN' with user-supplied colorDomain.</ListItem>
          </List>

          <ListTitle> <a href="https://luma.gl/docs/whats-new">luma.gl 8.5</a></ListTitle>
          <div style={{marginTop: 5}} />
          <List>
            <ListItem>glTF: Support for compressed textures.</ListItem>
            <ListItem>magnify (New post processing effect)</ListItem>
            <ListItem>GLSL transpiler: handle gl_FragColor when transpiling from ES 1.00 to 3.00.</ListItem>
          </List>

          <ListTitle> <a href="https://loaders.gl/docs/whats-new">loaders.gl 3.0</a></ListTitle>
          <div style={{marginTop: 5}} />
          loaders.gl v3.0 is a major release, that adds a range of new loaders and features and continues the transition of the loaders.gl code base to typescript.

          <ListTitle><a href="https://math.gl/docs/whats-new">math.gl 3.5</a></ListTitle>
          <div style={{marginTop: 5}} />
          <List>
          <ListItem> @math.gl/web-mercator: optional fovy parameter</ListItem>
          <ListItem> @math.gl/polygon: Improve performance of getPolygonSignedArea() by 3x</ListItem>
          <ListItem> @math.gl/polygon: Improved earcut() method for triangulating polygons</ListItem>
          <ListItem> @math.gl/culling: BoundingVolume.transform() on all bounding volumes.</ListItem>
          </List>

        </Paragraph>

        <H1>vis.gl 8.4</H1>
        <Paragraph>
          <ListTitle>Release Date: Jan 31, 2021</ListTitle>
          <ListTitle> <a href="https://deck.gl/docs/whats-new">deck.gl 8.4</a></ListTitle>
          <div style={{marginTop: 5}} />

          <List>
            <ListItem>MVTLayer - 2x performance via binary mode. TileJSON. Query Features.</ListItem>
            <ListItem>HeatmapLayer - GPU aggregations now include MEAN and SUM</ListItem>
            <ListItem>BitmapLayer - pixel picking</ListItem>
            <ListItem>All Layers - performance, rendering edge cases</ListItem>
            <ListItem>Interaction - mobile improvments, new gesture for 3D interaction, inertia</ListItem>
            <ListItem>loaders.gl integration - More control of loader autoselection</ListItem>
            <ListItem>@deck.gl/carto - enables data-driven map visualizations using CARTOColors</ListItem>
          </List>

          <ListTitle> <a href="https://luma.gl/docs/whats-new">luma.gl 8.4</a></ListTitle>
          <div style={{marginTop: 5}} />
          <List>
            <ListItem><b>TypeScript</b> - types are now exported</ListItem>
          </List>

          <ListTitle> <a href="https://loaders.gl/docs/whats-new">loaders.gl 2.3</a></ListTitle>
          <div style={{marginTop: 5}} />
          <List>
            <ListItem>
              loaders.gl was not updated for this vis.gl release.
            </ListItem>
          </List>

          <ListTitle><a href="https://math.gl/docs/whats-new">math.gl 3.4</a></ListTitle>
          <div style={{marginTop: 5}} />
          <List>
            <ListItem>
              @math.gl/geoid - New module for working with Earth Gravity Models
            </ListItem>
            <ListItem>
              @math.gl/polygon - Improved support for binary polygons
            </ListItem>
          </List>

          <ListTitle> <a href="https://visgl.github.io/react-map-gl/docs/whats-new">react-map-gl v6.1</a></ListTitle>
          <div style={{marginTop: 5}} />
          <List>
          <ListItem>Rendering library: Mapbox GL JS v2.</ListItem>
          <ListItem>Rendering library: Mapbox GL JS v1.</ListItem>
          <ListItem>Rendering library: MapLibre.</ListItem>
          <ListItem><b>TypeScript</b> types are now exported</ListItem>
          </List>

        </Paragraph>
      </SectionContent>
    </SectionContainer>
  </ContainerSm>
  );
}

const IndexPage = ({data}) => {
  const imageResolver = data.allFile.edges.reduce((prev, curr) => {
    prev[curr.node.relativePath] = curr.node.publicURL;
    return prev;
  }, {});
  return (
    <Layout page="home">
      <div id="home">
        <Releases imageResolver={imageResolver} />
      </div>
    </Layout>
  );
};

export default IndexPage;
export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          relativePath
          name
          extension
          publicURL
        }
      }
    }
  }
`;
