import React from 'react';

const Product = (props) => (
  <div className="l-flex c-box c-box--no-gap">
    <span className="l-flex__2 l-flex__align t--c-4">
      { props.product.sku }
    </span>
    <span className="l-flex__2 l-flex__align t--c-1">
      { props.product.description }
    </span>
    <span className="l-flex__2 l-flex__align t--center t--c-1">
      { props.product.brand }
    </span>
    <span className="l-flex__2 l-flex__align t--center t--c-1">
      { props.product.price }
    </span>
    <div className="l-flex__1 l-flex--spread l-flex__align l-flex">
      <input className="c-input--bordered c-input--small" type="text" />
      <button className="c-button c-button--grey" onClick={props.onPick.bind(this, props.product.sku)}>
        Add
      </button>
    </div>
  </div>
)

class SearchBox extends React.Component {
  constructor() {
    super();
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }
  render() {
    const pick = this.props.pickProduct;
    let products = this.props.products.map((p, k) => {
      return <Product product={p} key={k} onPick={pick} />
    });

    return (
      <div className="c-box c-search-box">
        <input type="text" onChange={this.props.filterProducts.bind(this)} />
        <div className="c-search-box__result-box">
          { products }
        </div>
      </div>
    )
  }
}

export default SearchBox;
