import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeContext } from './DarKModeContext';
import Lightswitch from './Lightswitch.js';
import Home from '../components/Home/Home';
import Menu from '../components/Menu/Menu';
import Histoire from '../components/Histoire/Histoire';
import Realisateur from '../components/Realisateur/Realisateur';
import Genre from '../components/Genre/Genre';
import Studio from '../components/Studio/Studio';
import Film from '../components/Film/Film';

function Container() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={
        darkMode ? `Container Container-dark` : `Container Container-light`
      }
    >
      <BrowserRouter>
        <Menu />
        <Lightswitch />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/histoire' element={<Histoire />} />
          <Route path='/genre' element={<Genre />} />
          <Route path='/realisateur' element={<Realisateur />} />
          <Route path='/studio' element={<Studio />} />
          <Route path='/film' element={<Film />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Container;
