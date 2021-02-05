import React from 'react';
import './Main.scss'
import video from '../videos/video.mp4'
const Main = () => {
    return (
        <div id="Home">
            <video autoPlay muted loop >
                <source src={video}  type="video/mp4" />
            </video>
            <div className="mainHome">
                <div className="text">Hi , i am Morsalin 😊👋🏻.I am a Full Stack Web Developer  Programmer also A Freelancer ✔  .. specializiing in mostly JS, but also write Python, PHP and some other stuff.
                <div className="button"><button><a href="https://www.fiverr.com/mr_morsalin?up_rollout=true"> Hire Me</a></button></div>
                </div>
               
                <div className="main_art">
                    <img src="https://res.cloudinary.com/codecaamp/image/upload/v1612162158/growth-2_om8cmw.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main
