import React, { useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import ProdContext from "./Store/Product-Context";
import classes from './ProductDetails.module.css';

const ProductDetails = () => {
  const params = useParams();
  const zoomDiv = useRef(null);
  const zooImg = useRef(null);
  const prodCtx = useContext(ProdContext);
  const products = prodCtx.products;
  const product = products.find((item) => item.id === params.productId);
  const mouseOverHandler = (event) => {
    zoomDiv.current.style.display = 'block';
    // console.log(event)
  }
  const moduseLeaveHandler = () => {
    zoomDiv.current.style.display = 'none';
  }
  return (
    <div>
      <h1>More details about this product</h1>
      <h1>{params.productId}</h1>
      <h2>Images</h2>
      <img className={classes.image} onMouseMove={mouseOverHandler} onMouseLeave={moduseLeaveHandler} src={product.imageUrl} alt={product.id}/>
      <div ref={zoomDiv} className={classes.zoomImageDiv}>
        <img ref={zooImg} className={classes.zoomedImage} src={product.imageUrl} alt={product.id}/>
      </div>
      <div>
        <h2>Reviews</h2>
        <ul>
          <li>Good product</li>
          <li>very nice product</li>
          <li>best quality product</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
