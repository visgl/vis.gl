import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {ContainerLg, H1, H2, H3, H4, Paragraph, List, ListItem, InlineCode} from './styling/components';

const components = {
  h1: H1
};

const ManifestoSection = ({data}) => {
  const {mdx} = useStaticQuery(
    graphql`
      query ManifestoSectionQuery {
        mdx(fileAbsolutePath: { regex: "/content/manifesto.mdx/" }) {
          body
        }
      }
    `
  );

  return (
    <ContainerLg className="markdown-body">
      <MDXProvider components={components}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </ContainerLg>
)};

export default ManifestoSection;
