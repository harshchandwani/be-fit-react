import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuAPI"
import MenuCard from './menuCard';
import Navbar from './navbar';


const  uniqueList = [
  ...new Set(Menu.map((curElem) => {
  return curElem.category;
})),
  "All",
];
// console.log(uniqueList)
function Restaurant() {
  
  const [menuData, setMenuData] = useState(Menu);

  const [menuList, setMenuList] = useState(uniqueList);
  const filterItems = (category) => {

    if(category === "All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  
  return (
    <>

      <Navbar filterItems = {filterItems} menuList ={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  );
};

export default Restaurant