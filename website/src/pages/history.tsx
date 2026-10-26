import React from 'react';
import Layout from '@theme/Layout';
import History from '../../../components/history';

export default function HistoryPage() {
  return <Layout title="vis.gl release history" description="The history and major releases of the vis.gl frameworks.">
    <History />
  </Layout>;
}
