'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <h1 className="Logo">ACME 5 day Weather Widget</h1>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            React Demo.
          </p>
        </footer>
      </div>
    );
  }
}
