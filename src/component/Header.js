import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
          alt="App Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
          <Link to="/">Home</Link></li>
          <li >
          <Link to="/about">About Us</Link></li>
          <li>
          <Link to="/contact">Contact Us</Link></li>
          <li>
          <Link to="/cart">Cart</Link></li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"   // create condition to loginand logout on click of button
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
