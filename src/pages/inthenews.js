import React from 'react';
import Layout from '../components/layout.js';
import { graphql } from 'gatsby';

import InTheNews from '../components/in-the-news';

const IndexPage = ({ data }) => {
  const imageResolver = data.allFile.edges.reduce((prev, curr) => {
    prev[curr.node.relativePath] = curr.node.publicURL;
    return prev;
  }, {});
  return (
    <Layout page="inthenews">
      <InTheNews imageResolver={imageResolver}/>
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
