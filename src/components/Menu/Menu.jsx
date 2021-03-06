import React from 'react';
import './Menu.css';
import Japon from '../../image/japon.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`navBar ${showLinks ? 'showNav' : 'hideNav'}`}>
      <ul className='navBarLinks'>
        <img className='logo' src={Japon} alt='logo' />
        <li className='navBarItem'>
          <NavLink onClick={handleShowLinks} to='/'>
            Accueil
          </NavLink>
        </li>
        <li className='navBarItem'>
          <NavLink onClick={handleShowLinks} to='/histoire'>
            Histoire
          </NavLink>
        </li>

        <li className='navBarItem'>
          <NavLink onClick={handleShowLinks} to='/genre'>
            Genres
          </NavLink>
        </li>
        <li className='navBarItem'>
          <NavLink onClick={handleShowLinks} to='/realisateur'>
            Réalisateurs
          </NavLink>
        </li>
        <li className='navBarItem'>
          <NavLink onClick={handleShowLinks} to='/studio'>
            Studios
          </NavLink>
        </li>
        <li className='navBarItem'>
          <NavLink onClick={handleShowLinks} to='/film'>
            Films
          </NavLink>
        </li>
      </ul>
      <button className='navBarBurger' onClick={handleShowLinks}>
        <span className='burgerBar'></span>
      </button>
    </nav>
  );
}
