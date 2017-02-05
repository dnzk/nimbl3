import React from 'react';
import ReactDOM from 'react-dom';

import './style/main.scss';

import Hello from './component/Hello';

ReactDOM.render(
  <Hello hi="Nimbl3" />,
  document.getElementById('app')
);
