import React from 'react';
import Layout from '../components/layout.js';
import { graphql } from 'gatsby';

import BlogPost from '../components/blog-post';

const IndexPage = ({ data }) => {
  const imageResolver = data.allFile.edges.reduce((prev, curr) => {
    prev[curr.node.relativePath] = curr.node.publicURL;
    return prev;
  }, {});
  return (
    <Layout page="blog">
      <BlogPost imageResolver={imageResolver}/>
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
