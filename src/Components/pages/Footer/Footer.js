import React from 'react'
import './Footer.scss'
import { GoLocation } from "react-icons/go";
import { AiOutlineMail ,AiOutlineCopyrightCircle} from "react-icons/ai";
const Footer = () => {
    return (
        <div className="main_footer">
        <div className="footer">
            <div className="footer__first"><img src="https://avatars.githubusercontent.com/u/69667157?s=460&u=b3c95f91be2b4fdbd1ea91cc18ec796fd64268af&v=4" alt="my__img" />
                <h4>Md Morsalin</h4>
                <p>🌱 I’m currently learning everything 😉

                </p>
                <p>❤Love to Code 🤩Love to Travel 💝Programmer ✔Freelancer ↖Full-stack Web developer 🧐Youtuber 👋🏻Muslim</p>
            </div>
            <div className="footer__middle">
                <h4> <GoLocation />Location  :  Keranigonj Dhaka Bangladesh</h4>
                <h4><AiOutlineMail/> Email:Codemi692@gmail.com</h4>
            </div>
            <div className="footer__last">
            </div>

        </div>
            <div className="footer__copy__right">
             <AiOutlineCopyrightCircle/>   CopyRight Md Morsalin | Terms under 2021.
            </div>
        </div>
    )
}

export default Footer
