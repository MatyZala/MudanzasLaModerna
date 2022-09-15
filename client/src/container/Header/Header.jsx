import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Mudanzas | Storage" />
      <h1 className="app__header-h1">Mudanzas La Moderna</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Seguridad y confianza desde 1914... </p>

    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
