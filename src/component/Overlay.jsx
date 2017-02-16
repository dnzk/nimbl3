import React from 'react';

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let classNames = `c-overlay`;

    if (this.props.show) {
      classNames = `${classNames} c-overlay--active`;
    }

    return (
      <div className={classNames} onClick={this.props.toggle.bind(this)}>
      </div>
    );
  }
}
