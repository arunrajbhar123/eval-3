import React,{useContext} from "react";
import {Link} from "react-router-dom";
// use react-router Link or NavLink
import {AuthContext} from "../../context/AuthContext";
import styles from "./styles.module.css";
import {CartContext} from "../../context/CartContext";

const Navbar = () => {
  const {status,handleAuth} = useContext(AuthContext);
  const {total} = useContext(CartContext);
  return (
    <div data-cy="navbar" className={styles.main}>
      <Link data-cy="navbar-home-link" to="/login">Logo</Link>
      <div className={styles.main_right}>
      <span data-cy="navbar-cart-items-count">Cart:{total}</span>
      <button data-cy="navbar-login-logout-button" onClick={()=>handleAuth(false)}>{status ? "Logout" :"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
