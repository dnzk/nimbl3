import React from 'react';

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
      <Sidebar menu={ this.state.sidebarMenu } />
    )
  }
}

export default App;
