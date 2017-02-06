// action types

export const ADD_PRODUCT_LIST = 'ADD_PRODUCT_LIST';
export const REMOVE_PRODUCT_LIST = 'REMOVE_PRODUCT_LIST';
export const UPDATE_QTY_PRODUCT_LIST = 'UPDATE_QTY_PRODUCT_LIST';
export const UPDATE_DISCOUNT_PRODUCT_LIST = 'UPDATE_DISCOUNT_PRODUCT_LIST';
export const UPDATE_PRICE_PRODUCT_LIST = 'UPDATE_PRICE_PRODUCT_LIST';
export const SET_MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY';

// action creators

export function addProductToList(product) {
  return {
    type: ADD_PRODUCT_LIST,
    product,
  };
}

export function removeProductFromList(sku) {
  return {
    type: REMOVE_PRODUCT_LIST,
    sku,
  };
}

export function updateProductQty(sku, qty) {
  return {
    type: UPDATE_QTY_PRODUCT_LIST,
    sku,
    qty,
  };
}

export function updateProductDiscount(sku, discount) {
  return {
    type: UPDATE_DISCOUNT_PRODUCT_LIST,
    sku,
    discount,
  };
}

export function updateProductPrice(sku, price) {
  return {
    type: UPDATE_PRICE_PRODUCT_LIST,
    sku,
    price,
  };
}

export function setModalVisibility(visible) {
  return {
    type: SET_MODAL_VISIBILITY,
    visible,
  };
}

// tree shape
const INITIAL_STATE = {
  ui: {
    modal: false,
  },
  products: [
    {
      sku: 'tnso000001',
      description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
      brand: 'Schneider Electric',
      price: 880,
    },
    {
      sku: 'tnso000002',
      description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
      brand: 'Schneider Electric',
      price: 880,
    },
    {
      sku: 'tnso000003',
      description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
      brand: 'Schneider Electric',
      price: 880,
    },
    {
      sku: 'tnso000004',
      description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
      brand: 'Schneider Electric',
      price: 880,
    },
  ],
  order: {
    name: 'tn so 000015',
    address1: 'CPF Saraburi',
    address2: 'Highway 2, Kaeng Khoi Saraburi Thailand',
    number: '+660873487934',
    type: 'retailers',
    owner: 'Tom Hanks',
    status: 'pending',
    deliveryDate: new Date(),
    subTotal: 40033,
    shippingFee: 200,
    specialDiscount: 400,
    tax: 7,
    total: 41000.21
    products: [
      {
        sku: 'tnso000001',
        description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
        brand: 'Schneider Electric',
        listPrice: 880,
        discount: 30,
        netPrice: 660,
        qty: 16,
        total: 50079.8823,
      },
      {
        sku: 'tnso000002',
        description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
        brand: 'Schneider Electric',
        listPrice: 880,
        discount: 30,
        netPrice: 660,
        qty: 16,
        total: 50079.8823,
      },
    ],
  }
};
