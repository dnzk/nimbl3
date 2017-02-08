import React from 'react';
import { connect } from 'react-redux';

import Body from './Body';
import Sidebar from './Sidebar';
import sidebarMenu from '../store/static';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarMenu: sidebarMenu,
    }
  }
  render() {
    return (
      <div className="l-outermost l-flex">
        <Sidebar menu={ this.state.sidebarMenu } />
        <Body order={ this.props.order } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    order: state.order
  };
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;

// export const AppContainer = connect(mapStateToProps)(App);

// export default App;
