import React from 'react';

const Crumbs = (props) => (
  <div className="c-crumbs">
    <span>{ props.currentLocation } / </span>
    <span className="c-crumbs__current">{ props.currentItemId }</span>
  </div>
)

export default Crumbs;
