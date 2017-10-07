import React from 'react'
import Hero from './Hero';
import Repos from './Repos';
import Showcase from './Showcase';
import Academy from './Academy';
import Modules from './Modules';

function Home() {
  return <div id="home">
    <Hero />
    <Repos />
    <Showcase />
    <Academy />
    <Modules />
  </div>
}

export default Home
