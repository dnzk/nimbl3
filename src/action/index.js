// action types

export const ADD_PRODUCT_LIST = 'ADD_PRODUCT_LIST';
export const REMOVE_PRODUCT_LIST = 'REMOVE_PRODUCT_LIST';
export const UPDATE_QTY_PRODUCT_LIST = 'UPDATE_QTY_PRODUCT_LIST';
export const UPDATE_DISCOUNT_PRODUCT_LIST = 'UPDATE_DISCOUNT_PRODUCT_LIST';
export const UPDATE_PRICE_PRODUCT_LIST = 'UPDATE_PRICE_PRODUCT_LIST';
export const SET_MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY';
export const GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS';

// action creators

export function addProductToList(sku) {
  return {
    type: ADD_PRODUCT_LIST,
    sku
  };
}

export function removeProductFromList(sku) {
  return {
    type: REMOVE_PRODUCT_LIST,
    sku,
  };
}

export function updateProductQty({sku, qty}) {
  return {
    type: UPDATE_QTY_PRODUCT_LIST,
    sku,
    qty,
  };
}

export function updateProductDiscount({sku, discount}) {
  return {
    type: UPDATE_DISCOUNT_PRODUCT_LIST,
    sku,
    discount,
  };
}

export function updateProductPrice({sku, price}) {
  return {
    type: UPDATE_PRICE_PRODUCT_LIST,
    sku,
    price,
  };
}

export function getFilteredProducts(sku) {
  return {
    type: GET_FILTERED_PRODUCTS,
    sku
  }
}

export function setModalVisibility(visible) {
  return {
    type: SET_MODAL_VISIBILITY,
    visible,
  };
}
