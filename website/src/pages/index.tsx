import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../../../components/hero';
import ManifestoSection from '../../../components/manifesto-section';
import ProjectCards from '../components/project-cards';

export default function IndexPage() {
  return <Layout title="vis.gl" description="Open source tools for geospatial visualization">
    <div id="home"><Hero /><ProjectCards /><ManifestoSection /></div>
  </Layout>;
}
