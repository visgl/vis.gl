import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

import About from '../components/about.js';

const IndexPage = ({ data }) => {
  const imageResolver = data.allFile.edges.reduce((prev, curr) => {
    prev[curr.node.relativePath] = curr.node.publicURL;
    return prev;
  }, {});
  console.log(imageResolver);
  return (
    <Layout page="about">
      <About imageResolver={imageResolver} />
    </Layout>
  );
};
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

export default IndexPage;
