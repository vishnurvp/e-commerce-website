import React from "react";

const CartContext = React.createContext({
  items: [],
  ids: [],
  addCrudId: ()=>{},
  addItem: (item) => {},
  removeItem: (id) => {},
  emptyCart: () => {},
  loadItems: () => {},
  openCart: () => {},
  closeCart: () => {},
  isCartOpen: false,
});

export default CartContext;
