import React, { useContext } from 'react';
import UserContext from './UserContext';

function Title({ text }) {
  let bg = useContext(UserContext);

  return (
    <h2
      className={`heading ${
        bg.isDarkMode ? 'sub-heading-dark' : 'sub-heading-light'
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
