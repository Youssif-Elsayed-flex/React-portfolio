import React from 'react'
import './Hero.css';
import { MdVerified } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import developerSkillsAnimation from '../../../public/Animation/developer skills.json'

function Hero() {
    return (
        <section className='hero flex' id='About'>
            <div className="desc">
                <div className="image flex">
                    <img src="/me as circle.png" alt="" />
                    <div className='virefied'><MdVerified /></div>
                </div>
                <div className="text">
                    <h1 className="title">Youssif Elsayed </h1>
                    <h2 className='about'>Gineor Frontend React , and Computer and mobile maintenance technician.</h2>
                    <p>
                        I'm Youssef Elsayed, a front-end developer, and a third-year student at We School, Programming.
                        I'm proficient in HTML, CSS, JavaScript, React.js, and Python, and enjoy building simple, easy-to-use websites and mobile mintance technican .
                    </p>
                </div>
                <div className="icons">
                    <a target="_blank" href="https://www.facebook.com/share/1LPbEUekfd/"><FaFacebook /></a>
                    <a target="_blank" href="https://www.instagram.com/youssifelsaied12/profilecard/?igsh=MnpoZXoycDRmYmk3"><FaInstagram /></a>
                    <a target="_blank" href="https://github.com/Youssif-Elsayed-flex"><FaGithub /></a>
                    <a target="_blank" href="www.linkedin.com/in/youssif-elsayed-54b01030a"><FaLinkedin /></a>
                </div>
            </div>
            <div className="animation">
                <Lottie animationData={developerSkillsAnimation} />
            </div>
        </section>
    )
}

export default Hero
