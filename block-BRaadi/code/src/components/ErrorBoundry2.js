import React from 'react';

class ErrorBoundry2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error 2 happed in Location</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry2;
