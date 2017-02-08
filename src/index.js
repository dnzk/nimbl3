// most of these are just for setup testing purpose
// delete when necessary

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import productOnList from './reducer';
import React from 'react';
import ReactDOM from 'react-dom';

import './style/main.scss';

import AppContainer from './component/App';

import { addProductToList, removeProductFromList, updateProductQty, updateProductDiscount, updateProductPrice } from './action';

import { INITIAL_STATE } from './store/initial-state';

let store = createStore(productOnList, INITIAL_STATE);
// console.log(store.getState());

// console.log(store.getState());

// let unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(addProductToList({
//   sku: 'tnso00005',
//   description: 'Heavy metal machine, 5000v',
//   brand: 'The super cool company',
//   price: 500
// }));
// store.dispatch(updateProductQty({
//   sku: 'tnso00005',
//   qty: 666
// }))
// /
// store.dispatch(updateProductDiscount({
//   sku: 'tnso00005',
//   discount: 30
// }));
// //
// store.dispatch(updateProductPrice({
//   sku: 'tnso00005',
//   price: 616
// }));

// ReactDOM.render(
//   // <Hello hi="Nimbl3" />,
//   <App />,
//   document.getElementById('app')
// );


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
