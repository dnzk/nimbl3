import { ADD_PRODUCT_LIST, REMOVE_PRODUCT_LIST, UPDATE_QTY_PRODUCT_LIST, UPDATE_DISCOUNT_PRODUCT_LIST, UPDATE_PRICE_PRODUCT_LIST, SET_MODAL_VISIBILITY, GET_FILTERED_PRODUCTS } from '../action';

function productOnList(state = {}, action) {
  let productList = state.order.products;
  let productStock = state.products;

  switch (action.type) {
    case ADD_PRODUCT_LIST:
      // if product exists in list, add quantity
      let sku = action.sku;
      // let sku = action.product.sku
      if (productIsInList(productList, sku)) {
        return Object.assign({}, state, {
          order: {
            products: productList.map((prod) => {
              if (prod.sku === sku) {
                return Object.assign({}, prod, {
                  qty: prod.qty + 1,
                });
              }
              return prod;
            })
          }
        });
      }

      // else, add product to list
      let productToAdd = productStock.filter((prod) => prod.sku === action.sku)[0];
      return Object.assign({}, state, {
        order: {
          products: [
            ...productList,
            Object.assign({}, productToAdd, {
              qty: 1,
              discount: 0
            })
          ]
        }
      });

    case REMOVE_PRODUCT_LIST:
      return Object.assign({}, state, {
        order: {
          products: productList.filter((prod) => prod.sku !== action.sku)
        }
      });

    case UPDATE_QTY_PRODUCT_LIST:
      return Object.assign({}, state, {
        order: {
          products: productList.map((prod) => {
            if (prod.sku === action.sku) {
              return Object.assign({}, prod, {
                qty: action.qty
              })
            }
            return prod;
          })
        }
      });

    case UPDATE_DISCOUNT_PRODUCT_LIST:
      return Object.assign({}, state, {
        order: {
          products: productList.map((prod) => {
            if (prod.sku === action.sku) {
              return Object.assign({}, prod, {
                discount: action.discount
              });
            }
            return prod;
          })
        }
      });

    case UPDATE_PRICE_PRODUCT_LIST:
      return Object.assign({}, state, {
        order: {
          products: productList.map((prod) => {
            if (prod.sku === action.sku) {
              return Object.assign({}, prod, {
                price: action.price
              });
            }
            return prod;
          })
        }
      });

    case GET_FILTERED_PRODUCTS:
      let filtered = [];
      if (action.sku) {
        filtered = productStock.filter((prod) => prod.sku.toLowerCase().indexOf(action.sku) > -1);
      }
      
      return Object.assign({}, state, {
        filteredProducts: filtered
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
