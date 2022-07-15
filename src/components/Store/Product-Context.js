import React from "react";

const ProdContext = React.createContext({
  products: [],
});

export const ProdContextProvider = (props) => {
  const contextValue = {
    products: [
      {
        id: "p111",
        title: "Colors",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity: 1,
      },
      {
        id: "p112",
        title: "Black and white Colors",
        price: 50,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity: 1,
      },
      {
        id: "p113",
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity: 1,
      },
      {
        id: "p114",
        title: "Blue Color",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        quantity: 1,
      },
    ],
  };

  return (
    <ProdContext.Provider value={contextValue}>
      {props.children}
    </ProdContext.Provider>
  );
};

export default ProdContext;
