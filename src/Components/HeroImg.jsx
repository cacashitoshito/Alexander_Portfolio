import "./HeroImgStyle.css";
import React from 'react'
import IntroImg from "../assets/Intro-img.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img src={IntroImg} className="intro-img" alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/Projects" className="btn">Projects</Link>
                <Link to="/Contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg