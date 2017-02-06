// most of these are just for setup testing purpose
// delete when necessary

import { createStore } from 'redux';
import productOnList from './reducer';
import React from 'react';
import ReactDOM from 'react-dom';

import './style/main.scss';

import Hello from './component/Hello';

import { addProductToList, removeProductFromList, updateProductQty, updateProductDiscount, updateProductPrice } from './action';

let store = createStore(productOnList);

console.log(store.getState());

let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addProductToList({
  sku: 'tnso00005',
  description: 'Heavy metal machine, 5000v',
  brand: 'The super cool company',
  price: 500
}));

store.dispatch(addProductToList({
  sku: 'tnso00005'
}));

store.dispatch(addProductToList({
  sku: 'tnso00006',
  description: 'Guitar of the year',
  brand: 'Ibanez',
  price: 5000
}));

store.dispatch(addProductToList({
  sku: 'tnso00007',
  description: 'Bass of the world',
  brand: 'Basses',
  price: 6082
}));

store.dispatch(removeProductFromList('tnso00007'))

store.dispatch(updateProductQty({
  sku: 'tnso00006',
  qty: 8
}));

store.dispatch(updateProductDiscount({
  sku: 'tnso00005',
  discount: 30
}));

store.dispatch(updateProductPrice({
  sku: 'tnso00006',
  price: 616
}));

ReactDOM.render(
  <Hello hi="Nimbl3" />,
  document.getElementById('app')
);
