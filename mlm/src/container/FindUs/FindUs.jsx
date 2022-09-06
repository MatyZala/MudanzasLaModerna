import React from 'react';

import { SubHeading } from '../../components';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contactanos" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Mudanzas la moderna</h1>
      <div className="app__wrapper-content">
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Telefono" />
        <textarea type="text" placeholder="Consulta" />
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Enviar</button>
    </div>

  </div>
);

export default FindUs;
