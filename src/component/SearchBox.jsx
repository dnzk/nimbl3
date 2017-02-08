import React from 'react';

const Product = (props) => (
  <div className="l-flex c-box">
    <span>
      { props.product.sku }
    </span>
    <span>
      { props.product.name }
    </span>
    <span>
      { props.product.brand }
    </span>
    <span>
      { props.product.price }
    </span>
    <button onClick={props.onPick.bind(this, props.product.sku)}>
      Add
    </button>
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
      <div className="c-box">
        <input type="text" onChange={this.props.displayProductSearch} />
        <div className="">
          { products }
        </div>
      </div>
    )
  }
}

export default SearchBox;
