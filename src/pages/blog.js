import React from 'react';
import Layout from '../components/layout.js';
import { graphql } from 'gatsby';

import Blog from '../components/blog';

const IndexPage = ({ data }) => {
  const imageResolver = data.allFile.edges.reduce((prev, curr) => {
    prev[curr.node.relativePath] = curr.node.publicURL;
    return prev;
  }, {});
  return (
    <Layout page="blog">
      <Blog imageResolver={imageResolver}/>
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
