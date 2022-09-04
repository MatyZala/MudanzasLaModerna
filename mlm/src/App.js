import React from 'react';

import { AboutUs, Soga, FindUs, Footer, IntroG, Embalajes, Grua, Header, Intro, Storage, Flota } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Flota />
    <Soga />
    <Intro />
    <Grua />
    <IntroG />
    <Storage />
    <Embalajes />
    <FindUs />
    <Footer />
  </div>
);

export default App;
