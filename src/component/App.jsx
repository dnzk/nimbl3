import React from 'react';

import Body from './Body';
import Sidebar from './Sidebar';
import sidebarMenu from '../store/static';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarMenu: sidebarMenu
    }
  }
  render() {

    return (
      <div className="l-outermost l-flex">
        <Sidebar menu={ this.state.sidebarMenu } />
        <Body />
      </div>
    )
  }
}

export default App;
