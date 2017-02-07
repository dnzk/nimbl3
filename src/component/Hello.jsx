import React from 'react';

import id from '../images/icons/box-purple.svg';

export default (props) => {
  return (
    <div>
      <h1>Hello
        <svg className="icon" width="20">
          <use xlinkHref={id} />
        </svg>
      </h1>
    </div>
  )
}
