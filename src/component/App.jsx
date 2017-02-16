import React from 'react';
import { connect } from 'react-redux';
import { addProductToList, getFilteredProducts } from '../action';

import Body from './Body';
import Sidebar from './Sidebar';
import Overlay from './Overlay';
import sidebarMenu from '../store/static';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarMenu: sidebarMenu,
      sidebarOpened: true,
      overlayShown: true,
    }
  }
  toggleSidebar() {
    this.setState({
      sidebarOpened: !this.state.sidebarOpened
    });
  }
  toggleOverlay() {
    this.setState({
      overlayShown: !this.state.overlayShown
    });
  }
  render() {
    return (
      <div className="l-outermost l-flex">
        <Sidebar menu={ this.state.sidebarMenu } opened={ this.state.sidebarOpened } toggleSidebar={ this.toggleSidebar.bind(this) } />
        <Body order={ this.props.order } products={ this.props.products } actions={ this.props.actions } filteredProducts={ this.props.filteredProducts } />
        <Overlay show={this.state.overlayShown} toggle={this.toggleOverlay.bind(this)} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      onProductClick: function (sku) {
        dispatch(addProductToList(sku));
      },
      filterProductStock: function (sku) {
        dispatch(getFilteredProducts(sku));
      }
    }
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

// export const AppContainer = connect(mapStateToProps)(App);

// export default App;
