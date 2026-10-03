import React from 'react';
import styled from '@emotion/styled';

const projects = [
  {name: 'math.gl', href: '/math.gl/', image: '/images/frameworks/math.png', description: '3D and geospatial math utilities.'},
  {name: 'probe.gl', href: '/probe.gl/', image: '/images/frameworks/probe.png', description: 'Logging, instrumentation, benchmarking and test utilities.'},
  {name: 'deck.gl-community', href: '/deck.gl-community/', image: '/images/frameworks/deck.gl-community.png', description: 'Community layers, basemaps and deck.gl add-ons.'},
  {name: 'tangram.gl', href: '/tangram.gl/', image: '/images/frameworks/tangram.png', description: 'Tangram rendering and deck.gl basemap integration.'},
  {name: 'react-map-gl', href: '/react-map-gl/', image: '/images/react-map-gl.png', description: 'React components for Mapbox GL JS and MapLibre GL JS.'},
  {name: 'react-google-maps', href: '/react-google-maps/', image: '/images/frameworks/react-google-maps.jpeg', description: 'React components and hooks for the Google Maps JavaScript API.'}
];

const internalFrameworks = [
  {name: 'dev-tools', href: '/dev-tools/', image: '/images/logos/vis-logo.png', description: 'Shared development tools for building, testing, linting, and publishing vis.gl projects.'}
];

const frameworkWebsites = [
  {name: 'deck.gl', href: 'https://deck.gl', image: '/images/frameworks/deck.png', description: 'High-performance visualization layers for large-scale geospatial data.'},
  {name: 'luma.gl', href: 'https://luma.gl', image: '/images/frameworks/luma.png', description: 'WebGL and WebGPU tools for data visualization and GPU computing.'},
  {name: 'loaders.gl', href: 'https://loaders.gl', image: '/images/frameworks/loaders.png', description: 'Loaders and workers for geospatial, 3D, tabular, and imagery data.'}
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin: 40px auto 60px;
  max-width: 1100px;
  padding: 0 24px;
  @media (max-width: 900px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

const Section = styled.section`
  margin: 40px auto 60px;
`;

const SectionTitle = styled.h2`
  max-width: 1100px;
  margin: 0 auto 24px;
  padding: 0 24px;
  text-align: center;
`;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  min-height: 210px;
  padding: 22px;
  border: 1px solid #d7dbe5;
  border-radius: 12px;
  background: #fff;
  color: inherit;
  box-shadow: 0 5px 18px rgb(20 30 60 / 8%);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover { color: inherit; transform: translateY(-3px); box-shadow: 0 10px 26px rgb(20 30 60 / 15%); text-decoration: none; }
`;

export default function ProjectCards() {
  return <>
    <Section aria-labelledby="framework-websites-title">
      <SectionTitle id="framework-websites-title">Frameworks with Websites</SectionTitle>
      <Grid aria-label="Frameworks with websites">
        {frameworkWebsites.map(project => <Card key={project.name} href={project.href} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt="" style={{height: 64, width: '100%', objectFit: 'contain', objectPosition: 'left'}} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <span style={{marginTop: 'auto', fontWeight: 600}}>Visit site →</span>
        </Card>)}
      </Grid>
    </Section>
    <Section aria-labelledby="framework-documentation-title">
      <SectionTitle id="framework-documentation-title">Framework Documentation</SectionTitle>
      <Grid aria-label="Framework documentation">
        {projects.map(project => <Card key={project.name} href={project.href}>
          <img src={project.image} alt="" style={{height: 64, width: '100%', objectFit: 'contain', objectPosition: 'left'}} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <span style={{marginTop: 'auto', fontWeight: 600}}>Explore docs →</span>
        </Card>)}
      </Grid>
    </Section>
    <Section aria-labelledby="internal-frameworks-title">
      <SectionTitle id="internal-frameworks-title">Internal Frameworks</SectionTitle>
      <Grid aria-label="Internal frameworks">
        {internalFrameworks.map(project => <Card key={project.name} href={project.href}>
          <img src={project.image} alt="" style={{height: 64, width: '100%', objectFit: 'contain', objectPosition: 'left'}} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <span style={{marginTop: 'auto', fontWeight: 600}}>Explore docs →</span>
        </Card>)}
      </Grid>
    </Section>
  </>;
}
