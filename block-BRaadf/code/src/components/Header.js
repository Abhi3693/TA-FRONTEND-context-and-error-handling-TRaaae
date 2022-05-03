import React, { useContext } from 'react';
import UserContext from './UserContext';

function Header() {
  let bg = useContext(UserContext);
  return (
    <h1
      className={`heading ${bg.isDarkMode ? 'heading-dark' : 'heading-light'}`}
    >
      {bg.isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </h1>
  );
}

export default Header;
