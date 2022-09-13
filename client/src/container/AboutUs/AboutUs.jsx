import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre Nosotros</h1>
        <p className="p__opensans">con mas de 100 años en el rubro siendo una de las empresas pioneras en el rubro en el Gran Córdoba. Mudanzas La Moderna es una empresa seria con la flota de vehículos y personal listos para amoldarse a sus necesidades.</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <p className="p__opensans">Empresa fundada en 1910, en la ciudad de Córdoba Cápital. Nos definde nuestra responsabilidad e integridad como empresa. Contamos con todos los servicios para el traslado seguro de sus bienes.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
