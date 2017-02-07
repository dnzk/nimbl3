import React from 'react';

class Body extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="l-flex__1 l-content-container">
        <header className="c-content-header l-flex">
          <input type="text" placeholder="Search here" className="l-flex__1" />
          <div className="c-content-header__user-info c-dropdown l-flex__none l-flex l-flex--column">
            <p>Hello, Somchai</p>
            <p>TWIN TYPES CORPORATION</p>
            <div className="c-dropdown__menu">
            </div>
          </div>
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

          <div className="c-box">
            <input type="text" />
          </div>

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
              <tr className="">
                <td>
                  TN SO 000015
                </td>
                <td>
                  Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 250 Vac
                </td>
                <td>
                  Schneider Electric
                </td>
                <td>
                  THB 880
                </td>
                <td>
                  30%
                </td>
                <td>
                  THB 660
                </td>
                <td>
                  16
                </td>
                <td>
                  THB 50000
                </td>
                <td>
                  Remove item
                </td>
              </tr>
            </tbody>
          </table>

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
