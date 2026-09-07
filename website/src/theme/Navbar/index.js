import React from 'react';
import {useLocation} from '@docusaurus/router';
import Header from '../../../../components/header';

function pageForPathname(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return 'home';
  if (path === '/news') return 'news';
  if (path === '/showcases') return 'showcases';
  return undefined;
}

export default function Navbar() {
  const {pathname} = useLocation();
  return <Header page={pageForPathname(pathname)} />;
}
