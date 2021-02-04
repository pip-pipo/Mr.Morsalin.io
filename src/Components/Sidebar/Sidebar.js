import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'

import { AiOutlineCloseCircle } from "react-icons/ai";
const Sidebar = ({ toogle,closeToggle }) => {
    return (
        <>
            {toogle ?
                <div className="Sidebar">
                    <div><AiOutlineCloseCircle onClick={closeToggle}  className="close" /></div>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <button><Link to="/signUp">SignUp</Link></button>
                </div> : ''
            }
        </>
    )
}

export default Sidebar
