import React from 'react'
import './Contact.scss'

import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Contact = () => {
    return (
        <div>

            <h3 >Contact Me</h3>

            <div className="social__icons">
                <ul>
                    <li><AiFillGithub className="icons" fontSize="40" /></li>
                    <li><AiFillFacebook className="icon" fontSize="40" /></li>
                    <li><AiFillInstagram className="icon" fontSize="40" /></li>
                    <li><AiFillTwitterCircle className="icon" fontSize="40" /></li>
                    <li><AiFillYoutube className="icon" fontSize="40" /></li>
                </ul>
            </div>
        </div>)
}

export default Contact
