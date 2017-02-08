import React from 'react';

const DataGridRow = (props) => (
  <tr className="">
    <td>{ props.item.sku }</td>
    <td>{ props.item.description }</td>
    <td>{ props.item.brand }</td>
    <td>{ props.item.price }</td>
    <td>{ props.item.discount }</td>
    <td>{ props.item.netPrice }</td>
    <td>{ props.item.qty }</td>
    <td>{ props.item.total }</td>
    <td>remove item</td>
  </tr>
)

class DataGrid extends React.Component {
  constructor() {
    super();
  }
  render() {
    let products = this.props.items.map((p, k) => {
      return <DataGridRow item={ p } key={ k } />
    });

    return (
      <table className="c-box">
        <thead>
          <tr className="">
            <th>
              SKU
            </th>
            <th>
              DESCRIPTION
            </th>
            <th>
              BRAND
            </th>
            <th>
              LIST PRICE
            </th>
            <th>
              DISCOUNT
            </th>
            <th>
              NET PRICE
            </th>
            <th>
              QTY
            </th>
            <th>
              TOTAL
            </th>
          </tr>
        </thead>

        <tbody>
          { products }

        </tbody>
      </table>
    )
  }
}

export default DataGrid;
