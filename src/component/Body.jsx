import React from 'react';

import SearchBox from './SearchBox';
import UserBox from './UserBox';
import DataGrid from './DataGrid';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      existingProducts: [],
      filteredProducts: []
    }
  }
  displayProductSearch(event) {
    // this.state.filteredProducts = ['123']
    // console.log(this.state.filteredProducts);
    // console.log(this.state.existingProducts);
  }
  componentDidMount() {
    console.log(this.props);
    // this.state.existingProducts = this.state.existingProducts.concat(this.props.products);
  }
  render() {
    return (
      <section className="l-flex__1 l-content-container">
        <header className="c-content-header l-flex">
          <input type="text" placeholder="Search here" className="l-flex__1" />
          <UserBox user={this.props.order.user} company={this.props.order.company} />
        </header>
        <section className="c-content-body c-order">
          <div className="c-crumbs">
            <span className="">Orders /</span>
            <span className="">TN SO 000015</span>
          </div>

          <div className="l-flex">
            <div className="l-flex l-flex__2 c-box">
              <div>
                <p>CPF Saraburi</p>
                <p>Highway 2, kaeng Khoi Saraburi Thailand</p>
                <p>+66 087 348 79 34</p>
              </div>
              <div>
                <label htmlFor="type">Type</label>
                <div className="c-dropdown">
                </div>
              </div>
              <div>
                <label htmlFor="owner">Owned By</label>
                <div className="c-dropdown">
                </div>
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <div className="c-dropdown">
                </div>
              </div>
            </div>
            <div className="l-flex__1">
              <a href="#">
                Back
              </a>
              <a href="#">
                Update Order
              </a>
            </div>
          </div>

          <SearchBox displayProductSearch={this.displayProductSearch.bind(this)} products={this.props.products} pickProduct={this.props.actions.onProductClick} />

          <DataGrid items={ this.props.order.products } />

          <div className="c-box">
            When you enter into any new are of science, you almost always find yourself with a baffling new language of technical terms to learn before
          </div>

          <div className="c-box">
            Things be here
          </div>

        </section>
      </section>
    )
  }
}

export default Body;
