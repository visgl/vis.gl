import React from 'react';
import Layout from '@theme/Layout';
import Showcase from '../../../components/showcase';
import showcasesYaml from '../../../content/showcases.yaml';
export default function ShowcasesPage() {
  return <Layout title="Showcases | vis.gl"><Showcase showcases={showcasesYaml.showcases} /></Layout>;
}
