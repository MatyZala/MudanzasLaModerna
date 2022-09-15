import React, { useState } from 'react';

import './FindUs.css';

import { SubHeading } from '../../components';

const axios = require('axios');

const FindUs = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Enviando...');
    const response = await axios.post('http://localhost:3001/contacto', formDetails);
    setButtonText('Enviar');
    const result = await response.data;
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Mensaje enviado con exito' });
    } else {
      setStatus({ succes: false, message: 'Ocurrio un problema. Vuelva a intentarlo mas tarde' });
    }
  };

  return (

    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contactanos" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Mudanzas la moderna</h1>
        <div className="container">
          <div className="contact-box">
            <div className="right">
              <form onSubmit={handleSubmit}>
                <input type="text" value={formDetails.name} className="field" placeholder="Nombre" onChange={(e) => onFormUpdate('name', e.target.value)} />
                <input type="email" value={formDetails.email} className="field" placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                <input type="tel" value={formDetails.phone} className="field" placeholder="N° Celular" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                <textarea type="text" value={formDetails.message} className="field area" placeholder="Consulta" onChange={(e) => onFormUpdate('message', e.target.value)} />
                <button type="submit" className="btn" style={{ marginTop: '2rem' }}>{buttonText}</button>
                <div>
                  {
              status.message && <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                   }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
