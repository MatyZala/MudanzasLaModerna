import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Inicio</a></li>
        <li className="p__opensans"><a href="#works">Trabajos</a></li>
        <li className="p__opensans"><a href="#storage">Storage</a></li>
        <li className="p__opensans"><a href="#about">Sobre Nosotros</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#contact" className="p__opensans">Contactanos...</a>
        <div />
        <a href="#about" className="p__opensans">Nuestra Historia</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Inicio</a></li>
              <li><a href="#works" onClick={() => setToggleMenu(false)}>Trabajos</a></li>
              <li><a href="#storage" onClick={() => setToggleMenu(false)}>Storage</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Sobre Nosotros</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contactanos</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
