import React from 'react';
import Hero from '../../../components/hero';
import ManifestoSection from '../../../components/manifesto-section';
import ProjectCards from '../components/project-cards';

export default function IndexPage() {
  return <div id="home"><Hero /><ProjectCards /><ManifestoSection /></div>;
}
