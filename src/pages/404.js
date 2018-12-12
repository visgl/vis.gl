import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <p>This page doesn't exist yet.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default NotFoundPage;
