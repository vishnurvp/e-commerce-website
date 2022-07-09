import React, { Fragment, useContext } from "react";
import Button from "./UI/Button";
import classes from "./Header.module.css";
import CartContext from "./Store/Cart-Context";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Fragment>
      <div className={classes.banner}>
        <div className={classes.linkCase}>
          <div>
            <NavLink activeClassName={classes.active} to={"/home"}>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName={classes.active} to={"/store"}>
              Store
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName={classes.active} to={"/about"}>
              About
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName={classes.active} to={"/contact"}>
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className={classes.cartCase}>
          <Button onClick={props.onCartClick}>Cart</Button>
          <div className={classes.cartItemsNum}>{cartCtx.items.length}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
