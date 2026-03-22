import { useState } from "react";
import { Link } from "react-router-dom";
import useOnLineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

 const onLineStatus = useOnLineStatus();


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
        <li>{onLineStatus ? "Online " : "Offline"}</li>
          <li>
          <Link to="/">Home</Link></li>
          <li >
          <Link to="/about">About Us</Link></li>
          <li>
          <Link to="/contact">Contact Us</Link></li>
          <li>
          <Link to="/cart">Cart</Link></li>
          <li>
          <Link to="/grocery">Grocery</Link></li>
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
