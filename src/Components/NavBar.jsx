import "./NavBarStyle.css";

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

const [color, setColor] = useState(false);
const changeColor = () => {
    if(window.scrollY >=1){
        setColor(true);
    }else{
        setColor(false);
    }
}
window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
    <Link to ="/">
    <h1>Portfolio</h1>
    </Link>
    <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
        <Link to ="/">Home</Link>
        </li>
        <li>
        <Link to ="/Projects">Projects</Link>
        </li>
        <li>
        <Link to ="/About">About</Link>
        </li>
        <li>
        <Link to ="/Contact">Contact</Link>
        </li>
    </ul>
    <div className="hamburger" onClick={handleClick}>
    {click ? <IoMdClose  size={20} style={{color: "#fff"  }}/> :
     <GiHamburgerMenu size={20} style={{color: "#fff"  }}/>}
        
    </div>
    </div>
  )
}

export default NavBar