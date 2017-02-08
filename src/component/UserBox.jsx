import React from 'react';

const UserBox = (props) => {
  return (
    <div className="c-content-header__user-info c-dropdown">
      <p>{ props.user }</p>
      <p>{ props.company }</p>
    </div>
  )
}

export default UserBox;
