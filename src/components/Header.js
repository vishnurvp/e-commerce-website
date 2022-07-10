import React, { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "./Store/Auth-Context";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler =()=>{
    authCtx.logout();
    history.replace('/login');
    
  }
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
          <div>
            {authCtx.isLoggedIn && <Link to={'/user'}>Your Profile</Link>}
          </div>
          <div>
            {!authCtx.isLoggedIn && <NavLink activeClassName={classes.active} to={"/login"}>
              Log in
            </NavLink>}
            {authCtx.isLoggedIn && <Link to={"/"}>
              <button onClick={logoutHandler}>Log Out</button>
            </Link>}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
