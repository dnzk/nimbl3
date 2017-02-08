import React from 'react';
import { connect } from 'react-redux';
import { addProductToList } from '../action';

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
        <Body order={ this.props.order } products={ this.props.products } actions={ this.props.actions } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // return state;
  return {
    order: state.order,
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      onProductClick: function (sku) {
        dispatch(addProductToList(sku))
      }
    }
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

// export const AppContainer = connect(mapStateToProps)(App);

// export default App;
