import React, { useContext } from 'react';
import { DarkModeContext } from './DarKModeContext';
import './Lightswitch.css';

function Lightswitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div className='Lightswitch'>
      <img
        src={
          darkMode
            ? `https://i.imgur.com/6g1mw4a.png`
            : `https://i.imgur.com/mmlxXv9.png`
        }
        alt='Lightswitch on'
        onClick={handleClick}
      />
    </div>
  );
}

export default Lightswitch;
