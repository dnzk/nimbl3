import React from 'react';

const OrderSummary = (props) => (
  <div className="l-flex">
    <div className="l-flex l-flex__2 c-box">
      <div className="l-flex__2">
        <p className="t--c-4">{ props.address1 }</p>
        <p className="t--c-1">{ props.address2 }</p>
        <p className="t--c-1">{ props.number }</p>
      </div>
      <div className="l-flex__1">
        <p htmlFor="type" className="t--c-3 t--center">Type</p>
        <div className="c-dropdown">
          <span className="t--c-1">Things</span>
        </div>
      </div>
      <div className="l-flex__1">
        <p htmlFor="owner" className="t--c-3 t--center">Owned By</p>
        <div className="c-dropdown">
          <span className="t--c-1">Things</span>
        </div>
      </div>
      <div className="l-flex__1">
        <p htmlFor="status" className="t--c-3 t--center">Status</p>
        <div className="c-dropdown">
          <span className="t--c-1">Things</span>
        </div>
      </div>
    </div>
    <div className="l-flex__1 l-flex l-flex--spread">
      <a href="#" className="c-button l-flex__align">
        Back
      </a>
      <a href="#" className="c-button c-button--grey l-flex__align">
        Update Order
      </a>
    </div>
  </div>
)

export default OrderSummary;
