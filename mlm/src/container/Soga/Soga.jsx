import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Soga.css';

const Soga = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Servicios En Altura" />
      <h1 className="headtext__cormorant">Trabajos Por Soga</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Contamos con personal altamente capacitado para realizar trabajos por soga...</p>
        </div>
        <p className="p__opensans"> Se realiza el embalaje y se toman todas las medidas de seguridad para el correcto movimiento de sus muebles. </p>
      </div>

      <div className="app__chef-sign">
        <p>Mudanzas La Moderna</p>
        <p className="p__opensans">Seguridad y Confianza</p>
      </div>
    </div>
  </div>
);

export default Soga;
