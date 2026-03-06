import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");

  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
        <Link to='/'><h1 className='logo'>Mumma.</h1></Link>
        <ul className='navbar-menu'>
            <Link onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href="#footer" onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us</a>
            {/* <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>mobile-app</li> */}

        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=""/>
          <div className="navbar-search-icon">
            <Link to='/cart'  ><img src={assets.basket_icon} alt=""/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>

          </div>
          <button onClick={()=>setShowLogin(true)}>signIn</button>
        </div>
    </div>
  )
}

export default Navbar;