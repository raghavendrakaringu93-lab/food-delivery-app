import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  const { getTotalCartAmount } = useContext(StoreContext);
  const scrollToSection = (id, menuName) => {
    setMenu(menuName);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='navbar'>
      <h1 className='logo'>Mumma.</h1>
      <ul className="navbar-menu">

        <li className={menu === "Home" ? "active" : ""}>
          <Link to="/" onClick={() => scrollToSection("home", "Home")}>
            Home
          </Link>
        </li>

        <li
          onClick={() => scrollToSection("explore-menu", "Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>

        <li
          onClick={() => scrollToSection("footer", "Contact-us")}
          className={menu === "Contact-us" ? "active" : ""}
        >
          Contact
        </li>

      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'  ><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>

        </div>
        <button onClick={() => setShowLogin(true)}>signIn</button>
      </div>
    </div>
  )
}

export default Navbar;