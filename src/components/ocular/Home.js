import React from 'react'
import Header from './header';
// import Hero from './Hero';
import Repos from './Repos';
import Showcase from './Showcase';
import Academy from './Academy';
import Modules from './Modules';

import Footer from './Footer';

function Home() {
  return <div id="home">
    <Header />
    {/* <Hero /> */}
    <Repos />
    <Showcase />
    <Academy />
    <Modules />
    <Footer />
  </div>
}

export default Home
