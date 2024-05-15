import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React1 from "../assets/React1.jpeg";
import React2 from "../assets/React2.jpeg";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
    <h1>Who Am I?</h1>
    <p>I am a react front-end developer. I create 
    responsive secure websites for my clients.</p>
    <Link to="/Contact">
        <button className="btn">Contact</button>
    </Link>
    </div>
    <div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src={React1} className="img" alt="reactFlyer1"/>
        </div>
        <div className="img-stack bottom">
            <img src={React2} className="img" alt="reactFlyer2"/>
        </div>
    </div>
    </div>

    </div>
  )
}

export default AboutContent