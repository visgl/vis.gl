import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import ManifestoSection from '../components/manifesto-section';

const IndexPage = ({data}) => {
  const imageResolver = data.allFile.edges.reduce((prev, curr) => {
    prev[curr.node.relativePath] = curr.node.publicURL;
    return prev;
  }, {});
  return (
    <Layout page="home">
      <div id="home">
        <Hero />
        <ManifestoSection imageResolver={imageResolver} />
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
