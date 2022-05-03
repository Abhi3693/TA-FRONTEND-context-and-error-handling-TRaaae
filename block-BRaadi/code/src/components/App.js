import React from 'react';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
  render() {
    // let { isDarkMode } = this.state;
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;

// isDarkMode={isDarkMode}
// isDarkMode={isDarkMode}
