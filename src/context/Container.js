import React, { useContext } from 'react';
import { DarkModeContext } from './DarKModeContext';
import Lightswitch from './Lightswitch';
import Home from '../components/Home/Home';
import Menu from '../components/Menu/Menu';

function Container() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={
        darkMode ? `Container Container-dark` : `Container Container-light`
      }
    >
      <Menu />
      <Home />
      <Lightswitch />
    </div>
  );
}

export default Container;
