import React from 'react';
import './FindUs.css';

import { SubHeading } from '../../components';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contactanos" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Mudanzas la moderna</h1>
      <div className="container">
        <div className="contact-box">
          <div className="right">
            <input type="text" className="field" placeholder="Nombre" />
            <input type="email" className="field" placeholder="Email" />
            <input type="tel" className="field" placeholder="Telefono" />
            <textarea type="text" className="field area" placeholder="Consulta" />
            <button type="button" className="btn" style={{ marginTop: '2rem' }}>Enviar</button>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default FindUs;
