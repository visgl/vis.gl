import React from 'react';
import Showcase from '../../../components/showcase';
import showcasesYaml from '../../../content/showcases.yaml';
export default function ShowcasesPage() { return <Showcase showcases={showcasesYaml.showcases} />; }
