import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';

import './layout.css';
import Footer from './footer';

const Layout = ({ page, children }) => (
  <StaticQuery
    query={graphql`
      query {
        allMetaYaml {
          edges {
            node {
              page
              title
              meta {
                name
                content
              }
            }
          }
        }
      }
    `}
    render={data => {
      const metaDataResolver = data.allMetaYaml.edges.reduce(
        (prev, { node }) => {
          prev[node.page] = node;
          return prev;
        },
        {}
      );
      const metaData = metaDataResolver[page] || { title: '', meta: [] };
      return (
        <>
          <Helmet title={metaData.title} meta={metaData.meta} />
          <Header page={page} />
          <div className="page">{children}</div>
          <Footer />
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
};

export default Layout;
