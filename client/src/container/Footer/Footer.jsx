import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contacto</h1>
        <p className="p__opensans">Av. Capdevila 1549 | Córdoba - Argentina.</p>
        <p className="p__opensans"> 473-1320</p>
        <p className="p__opensans">+54 9 351-530-8384</p>
        <p className="p__opensans">+54 9 351-226-3327</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Mudanzas La moderna <br /> seguridad y confianza.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horarios de trabajo</h1>
        <p className="p__opensans">lunes-viernes:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">sabados-domingos:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Mudanzas la moderna. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
