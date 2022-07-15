import React, { useContext, useEffect, useState } from "react";
import CartContext from "./Cart-Context";
import AuthContext from "./Auth-Context";

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsopen, setCartIsOpen] = useState(false);
  const [crudIds, setCrudIds] = useState([]);

  const authCtx = useContext(AuthContext);

  const addItemToCartHandler = (item) => {
    // find the object in the cartItems array witch is similar to this item
    const isThere = cartItems.find((element) => {
      if (element.id === item.id) return true;
      return false;
    });
    if (isThere) {
      item.quantity += 1;
      setCartItems((olditems) => [...olditems.filter(el => el.id !== item.id), item]);
      // alert("Item is already in the cart");
    } else {
      setCartItems((olditems) => [...olditems, item]);
    }
  };

  const removeItemFromCartHandler = (itemId) => {
    setCartItems((olditems) => olditems.filter((item) => item.id !== itemId));
  };

  const removeAllFromCartHandler = () => {
    setCartItems([]);
  }

  const openCartHandler = () => {
    setCartIsOpen(true);
  }
  const closeCartHandler = ()=>{
    setCartIsOpen(false);
  }

  useEffect(()=>{
    const loadItemsHandler = async() => {
      const cleanEmail = authCtx.email.replace(/[^a-zA-Z0-9]/g, "");
      const crudURL = `https://crudcrud.com/api/82abaedbf68845608f4e803627847461/${cleanEmail}`;
      try {
        const response = await fetch(crudURL)
        const data = await response.json();
  
        const gotData = data.map(item=>item.items);
        // console.log(gotData);
        const amap = new Map();
        gotData.forEach((item) => {
          if (amap.has(item.id)) {
            const temp = amap.get(item.id);
            temp.quantity+=1;
            amap.set(item.id, temp);
          }
          else amap.set(item.id, item);
        })
        const newData = Array.from(amap.values());
        setCartItems(newData);
      } catch (error) {
        console.log(error);
      }
    }
    loadItemsHandler();
  },[authCtx.email]);
  

  const addCrudIdHandler = (crudId) => {
    setCrudIds((olditems)=>[...olditems,crudId]);
  }

  const removeCrudIdsHandler = (itemId) => {
    setCrudIds((olditems) => olditems.filter((item) => item !== itemId));
  }
  
  const cartContext = {
    items: cartItems,
    ids: crudIds,
    removeCrudIds: removeCrudIdsHandler,
    addCrudId: addCrudIdHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    emptyCart: removeAllFromCartHandler,
    // loadItems: loadItemsHandler,
    openCart: openCartHandler,
    closeCart: closeCartHandler,
    isCartOpen: cartIsopen,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
