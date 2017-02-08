// tree shape
export const INITIAL_STATE = {
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
    user: 'Somchai',
    company: 'Twin Types Corporation',
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
    total: 41000.21,
    products: [
      {
        sku: 'tnso000001',
        description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
        brand: 'Schneider Electric',
        price: 880,
        discount: 30,
        netPrice: 660,
        qty: 16,
        total: 50079.8823,
      },
      {
        sku: 'tnso000002',
        description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
        brand: 'Schneider Electric',
        price: 880,
        discount: 30,
        netPrice: 660,
        qty: 16,
        total: 50079.8823,
      },
    ],
  }
};
