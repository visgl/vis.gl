import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import ManifestoSection from '../components/manifesto-section';

const IndexPage = ({data}) => {
  return (
    <Layout page="home">
      <div id="home">
        <Hero />
        <ManifestoSection />
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
