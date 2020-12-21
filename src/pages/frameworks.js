import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import FrameworkList from '../components/framework-list';
import Modules from '../components/modules';

const IndexPage = ({data}) => {
  const imageResolver = data.allFile.edges.reduce((prev, curr) => {prev[curr.node.relativePath] = curr.node.publicURL; return prev;}, {});
  const starResolver = {}; // data.github.nodes.reduce((prev, curr) => {prev[curr.id] = curr.stargazers.totalCount; return prev;}, {});
  return (
    <Layout page="home">
      <div id="home">
        <FrameworkList starResolver={starResolver} imageResolver={imageResolver}/>
        <Modules />
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