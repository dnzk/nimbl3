import React from 'react';

import SearchBox from './SearchBox';
import UserBox from './UserBox';
import DataGrid from './DataGrid';
import Crumbs from './Crumbs';
import OrderSummary from './OrderSummary';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      existingProducts: [],
      filteredProducts: []
    }
  }
  filterProducts(event) {
    this.props.actions.filterProductStock(event.target.value);
  }
  render() {
    return (
      <section className="l-flex__1 l-content-container">
        <header className="c-content-header l-flex">
          <input type="text" placeholder="Search here" className="l-flex__1" />
          <UserBox user={this.props.order.user} company={this.props.order.company} />
        </header>
        <section className="c-content-body c-order">

          <Crumbs currentLocation={'Orders'} currentItemId={this.props.order.id} />

          <OrderSummary address1={ this.props.order.address1 } address2={ this.props.order.address2 } number={ this.props.order.number } />

          <SearchBox products={this.props.filteredProducts} pickProduct={this.props.actions.onProductClick} filterProducts={this.filterProducts.bind(this)} />

          <DataGrid items={ this.props.order.products } />

          <p>Remarks</p>
          <div className="c-box">
            When you enter into any new are of science, you almost always find yourself with a baffling new language of technical terms to learn before
          </div>

          <div className="c-box c-order-summary">
            Things be here
          </div>

        </section>
      </section>
    )
  }
}

export default Body;
