import React from 'react';
import { connect } from 'react-redux';
import { addProductToList, getFilteredProducts } from '../action';

import Body from './Body';
import Sidebar from './Sidebar';
import sidebarMenu from '../store/static';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarMenu: sidebarMenu,
      sidebarOpened: true
    }
  }
  toggleSidebar() {
    this.setState({
      sidebarOpened: !this.state.sidebarOpened
    })
  }
  render() {
    return (
      <div className="l-outermost l-flex">
        <Sidebar menu={ this.state.sidebarMenu } opened={ this.state.sidebarOpened } toggleSidebar={ this.toggleSidebar.bind(this) } />
        <Body order={ this.props.order } products={ this.props.products } actions={ this.props.actions } filteredProducts={ this.props.filteredProducts } />
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
