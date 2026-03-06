import React from 'react'
import "./ExploreMenu.css";
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h2>Explore our menu</h2>
        <p className="explore-menu-text">Choose from a variety of delicious dishes and enjoy your meal! Sharing good food with family and friends makes it even more special and creates beautiful memories.”</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu;