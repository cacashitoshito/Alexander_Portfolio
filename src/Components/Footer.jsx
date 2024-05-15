import "./FooterStyle.css"

import React from 'react'
import { FaHome, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { LiaMailBulkSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
    <div className="left">
        <div className="location">
        <FaHome size={20} style={{ color: "#fff", marginRight:"2rem"}}/>
        <div>
            <p>56 Brenasanjuhno Cacashi's Estate.</p>
            <p>Nigeria.</p>
        </div>
        </div>
        <div className="phone">
        <h4><FaPhone size={20} style={{ color: "#fff", marginRight:"2rem"}}/>+2348037144043</h4>
        </div>
        <div className="email">
        <h4><LiaMailBulkSolid  size={20} style={{ color: "#fff", marginRight:"2rem"}}/>cacashitoshito@gmail.com</h4>
        </div>
    </div>
    <div className="right">
        <h4>About the company</h4>
        <p>This is me Alexander Inope. CEO and 
        Founder of Cacashi's tech world. i enjoy discussing 
        new projects and design challenges.</p>
        <div className="social">
        <FaFacebook size={30} style={{ color: "#fff", marginRight:"1rem"}}/>
        <FaTwitter  size={30} style={{ color: "#fff", marginRight:"1rem"}}/>
        <FaLinkedin size={30} style={{ color: "#fff", marginRight:"1rem"}}/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Footer