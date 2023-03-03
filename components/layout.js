import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Header from './header';
import Footer from './footer';
import metaYaml from '../content/meta.yaml';

const findPageMeta = path => metaYaml.find(d => d.path === path);

const Layout = ({children}) => {
  const router = useRouter();
  const {page, meta, title} = findPageMeta(router.pathname) ?? findPageMeta('/') ?? {};
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.png" />
        {meta?.map(({name, content}) => (
          <meta key={name} name={name} content={content} />
        ))}
      </Head>
      <Header page={page} />
      <div className="page">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
