import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  emptyCart: ()=>{},
  openCart: ()=>{},
  closeCart: ()=>{},
  isCartOpen: false,
});

export default CartContext;
