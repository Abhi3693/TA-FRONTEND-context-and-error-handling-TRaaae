import React, { useContext } from 'react';
import UserContext from './UserContext';

export default function SwitchButton({ changeMode }) {
  let bg = useContext(UserContext);
  return (
    <button
      className={`btn ${bg.isDarkMode ? 'btn-dark' : 'btn-light'}`}
      onClick={bg.changeMode}
    >
      {bg.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
