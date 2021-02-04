import React from 'react'
import './Services.scss'
import { AiOutlineGlobal, AiFillAndroid, AiOutlineDesktop } from "react-icons/ai";
const Services = () => {
    return (
        <div className="servicess">
            <h4>Services</h4>
            <div className="card">
                <div className="servicess_first">
                    <AiOutlineGlobal className="icon" fontSize="35" />
                    <h5>Full-Stack Web Development</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, totam culpa libero dignissimos, ea soluta reprehenderit non quos molestias obcaecati cupiditate asperiores?</p>
                </div>
                <div className="servicess_middle">
                    <AiFillAndroid className="icon" fontSize="35" />
                    <h5>Android Application</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, totam culpa libero dignissimos, ea soluta reprehenderit non quos molestias obcaecati cupiditate asperiores?</p>

                </div>
                <div className="servicess_2nd_middle">
                    <AiOutlineDesktop className="icon" fontSize="35" />
                    <h5>Desktop Application</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, totam culpa libero dignissimos, ea soluta reprehenderit non quos molestias obcaecati cupiditate asperiores?</p>

                </div>

            </div>
        </div>
    )
}

export default Services
