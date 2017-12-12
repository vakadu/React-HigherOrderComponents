import React, { Component } from 'react';

import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          {this.props.children}
          {/*in src/index.js Route "/" has children component of "resources" route, so to get children route we use this.props.children*/}
      </div>
    );
  }
}
