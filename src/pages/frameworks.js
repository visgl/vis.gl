import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// import FrameworkList from '../components/framework-list';
// import Modules from '../components/modules';

import {
  ContainerLg,
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  List,
  ListItem,
  InlineCode,
} from '../components/styling/components';

const FrameworksPage = ({data}) => {
  const imageResolver = data.allFile.edges.reduce((prev, curr) => {prev[curr.node.relativePath] = curr.node.publicURL; return prev;}, {});
  return (
    <Layout page="home">
      <div className="section-title">
        <Paragraph>vis.gl</Paragraph>
        <Paragraph>Framework Catalog</Paragraph>
      </div>
      <div className="section-text">
        <H2>The vis.gl Framework Catalog</H2>
        <Paragraph>
          The vis.gl frameworks are designed for GPU powered geospatial visualization
          and analytics on the web. 
          The frameworks are designed to be independently usable while following a 
          common style that makes them work seamlessly together.
        </Paragraph>
        <Paragraph>
          Each framework provides a number of sub-modules that export composable
          components such as loaders, visualzation layers, and math modules that developers 
          can cherry-pick and combine to achieve desired results. Various 
        </Paragraph>
        <br/>
          { renderCoreTable(imageResolver) }
        <br/>

        <H2>Related Frameworks</H2>
        <Paragraph>
        In addition to the core frameworks, the vis.gl framework suite integrates with
        a number of related open source frameworks that are not under open governance.
        </Paragraph>
        <br/>
          { renderAuxTable(imageResolver) }
      </div>
    </Layout>
  )
  // const starResolver = {}; // data.github.nodes.reduce((prev, curr) => {prev[curr.id] = curr.stargazers.totalCount; return prev;}, {});
  // return (
  //   <Layout page="home">
  //     <div id="home">
  //       <FrameworkList starResolver={starResolver} imageResolver={imageResolver}/>
  //       <Modules />
  //     </div>
  //   </Layout>
  // );
};

function renderCoreTable(imageResolver) {
  return (
    <table cellSpacing={20}>
      <thead>
        <tr>
          <th>
            <H3></H3>
          </th>
          <th style={{paddingLeft: 10, paddingRight: 80}}>
            <H3></H3>
          </th>
          <th style={{paddingLeft: 30}}>
            <H3></H3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              height="100"
              alt="kepler.gl"
              title="kepler.gl"
              src={imageResolver['frameworks/kepler.png']}
            />
          </td>
          <td>
            <a href="https://kepler.gl">
              <code>kepler.gl</code>
            </a>
          </td>
          <td>
            The kepler.gl demo application is a widely used geospatial tool
            for visualization and exploration of geospatial data using deck.gl.
            It demonstrates the power of the kepler.gl application framework, 
            designed to let users build advanced custom geospatial applications.
          </td>
        </tr>
        <tr>
          <td>
            <img
              height="100"
              alt="deck.gl"
              title="deck.gl"
              src={imageResolver['frameworks/deck.png']}
            />
          </td>
          <td>
            <a href="https://deck.gl">
              <code>deck.gl</code>
            </a>
          </td>
          <td>
            Providing high-performance, GPU powered visualization layers for 
            large scale geospatial data.
            deck.gl is the corner stone of the vis.gl framework suite.
            A selection of submodules provide layers for various geospatial and 3D 
            use cases.
          </td>
        </tr>
        <tr>
          <td>
            <img
              height="100"
              alt="pydeck"
              title="pydeck"
              src={imageResolver['frameworks/pydeck.png']}
            />
          </td>
        <td>
          <a href="https://pydeck.gl">
            <code>pydeck</code>
          </a>
          </td>
          <td>
            Python bindings for deck.gl that enable powerful custom geospatial visualizations
            to be programmed directly in Jupyter Notebooks.
          </td>
        </tr>
        <tr>
          <td>
            <img
              height="100"
              alt="loaders.gl"
              title="loaders.gl"
              src={imageResolver['frameworks/loaders.png']}
            />
          </td>
          <td>
            <a href="https://loaders.gl">
              <code>loaders.gl</code>
            </a>
          </td>
          <td>
            A wide range of highly optimized, framework-independent loaders for geospatial, 
            tabular and 3D file formats. Supports worker based binary data loading.
            Supported outputs includes geospatial layers, point clouds, 3D geometries, 
            images, textures and tabular data.
          </td>
        </tr>
        <tr>
          <td>
            <img
              height="100"
              alt="luma.gl"
              title="luma.gl"
              src={imageResolver['frameworks/luma.png']}
            />
          </td>
          <td>
            <a href="https://luma.gl">
              <code>luma.gl</code>
            </a>
          </td>
          <td>
            A high-performance WebGL library for high-performance visualization
            and GPU computation.
          </td>
        </tr>
        <tr>
          <td>
            <img
              height="100"
              alt="react-map-gl"
              title="react-map-gl"
              src={imageResolver['frameworks/react-map-gl.png']}
            />
          </td>
          <td>
            <a href="http://visgl.github.io/react-map-gl">
              <code>react-map-gl</code>
            </a>
          </td>
          <td>
            A React wrapper for Mapbox GL JS that integrates with deck.gl.
          </td>
        </tr>

        <tr>
          <td>
            <img
              height="100"
              alt="FlowmapBlue"
              title="FlowmapBlue"
              src={imageResolver['frameworks/FlowmapBlue.jpg']}
            />
          </td>
          <td>
            <a href="https://flowmap.blue/">
              <code>FlowmapBlue</code>
            </a>
          </td>
          <td>
            FlowmapBlue is a tool for visualizing aggregated numbers of movements between geographic locations as flow maps.
            It is used for representing data on urban mobility, travel, transportation, human and animal migration,
            material flows, supply chains, waste management and many other topics.
          </td>
        </tr>

      </tbody>
    </table>
  );
}

function renderAuxTable(imageResolver) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <H3></H3>
          </th>
          <th style={{paddingLeft: 10, paddingRight: 80}}>
            <H3></H3>
          </th>
          <th style={{paddingLeft: 30}}>
            <H3></H3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              height="100"
              alt="hubble.gl"
              title="hubble.gl"
              src={imageResolver['frameworks/hubble.png']}
            />
          </td>
          <td>
            <a href="https://hubble.gl">
              <code>hubble.gl</code>
            </a>
          </td>
          <td>A powerful deck.gl-based video capture solution.</td>
        </tr>
        <tr>
          <td>
            <img
              height="100"
              alt="nebula.gl"
              title="nebula.gl"
              src={imageResolver['frameworks/nebula.png']}
            />
          </td>
          <td>
            <a href="https://nebula.gl">
              <code>nebula.gl</code>
            </a>
          </td>
          <td>A high-performance feature editing framework for deck.gl.</td>
        </tr>
        <tr>
          <td>
            <img
              height="100"
              alt="math.gl"
              title="math.gl"
              src={imageResolver['frameworks/math.png']}
            />
          </td>
          <td>
            <a href="https://math.gl">
              <code>math.gl</code>
            </a>
          </td>
          <td>Math library focusing on 3D and geospatial math.</td>
        </tr>
        <tr>
          <td>
            <img
              height="100"
              alt="H3"
              title="H3"
              src={imageResolver['frameworks/h3.png']}
            />
          </td>
          <td>
            <a href="https://h3geo.org">
              <code>H3</code>
            </a>
          </td>
          <td>Hexagon-based discrete global grid system.</td>
        </tr>
      </tbody>
    </table>
  );
}

export default FrameworksPage;
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

/*
    github {
      nodes(
        ids: [
          "MDEwOlJlcG9zaXRvcnk0ODAzMDIwNA=="
          "MDEwOlJlcG9zaXRvcnk1MDM0MDkyOA=="
          "MDEwOlJlcG9zaXRvcnk0MzkwMzg4Mg=="
          "MDEwOlJlcG9zaXRvcnk1MjMwNDM2Mg=="
        ]
      )
    }
*/