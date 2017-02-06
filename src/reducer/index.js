import { ADD_PRODUCT_LIST, REMOVE_PRODUCT_LIST, UPDATE_QTY_PRODUCT_LIST, UPDATE_DISCOUNT_PRODUCT_LIST, UPDATE_PRICE_PRODUCT_LIST, SET_MODAL_VISIBILITY } from '../action';

function productOnList(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_LIST:
      // if product exists in list, add quantity
      if (productIsInList(state, action.sku)) {
        return state.map((prod) => {
          if (prod.sku === action.sku) {
            return Object.assign({}, prod, {
              qty: prod.qty + 1
            });
          }
          return prod;
        });
      }

      // else, add product to list
      return [
        ...state,
        Object.assign({}, action, {
          qty: 1
        })
      ];

    case REMOVE_PRODUCT_LIST:
      return state.filter((prod) => prod.sku !== action);

    case UPDATE_QTY_PRODUCT_LIST:
      return state.map((prod) => {
        if (prod.sku === action.sku) {
          return Object.assign({}, prod, {
            qty: action.qty
          })
        }
        return prod;
      });

    case UPDATE_DISCOUNT_PRODUCT_LIST:
      return state.map((prod) => {
        if (prod.sku === action.sku) {
          return Object.assign({}, prod, {
            discount: action.discount
          });
        }
        return prod;
      });

    case UPDATE_PRICE_PRODUCT_LIST:
      return state.map((prod) => {
        if (prod.sku === action.sku) {
          return Object.assign({}, prod, {
            price: action.price
          });
        }
        return prod;
      });

    default:
      return state;
  }
}

function productIsInList(productList, sku) {
  return productList.reduce((prev, curr) => {
    return prev || curr.sku === sku;
  }, false);
}

export default productOnList;
