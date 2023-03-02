import React from 'react';
import Showcase from '../components/showcase';

import showcasesYaml from '../content/showcases.yaml';
export type ShowcaseEntry = {
  description: string;
  image: string;
  label: string;
  name: string;
  url: string;
};
declare module '../content/showcases.yaml' {
  const showcases: ShowcaseEntry[];
}

const ShowcasesPage = () => {
  return <Showcase showcases={showcasesYaml.showcases} />;
};

export default ShowcasesPage;
