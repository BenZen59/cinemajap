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
          <NavLink to='/histoire'>Histoire</NavLink>
        </li>

        <li className='navBarItem'>Genres</li>
        <li className='navBarItem'>Réalisateurs</li>
        <li className='navBarItem'>Studios</li>
      </ul>
      <button className='navBarBurger' onClick={handleShowLinks}>
        <span className='burgerBar'></span>
      </button>
    </nav>
  );
}
