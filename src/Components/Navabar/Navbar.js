import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
const Navbar = ({toogle}) => {
    
    return (
        <>
            <nav className="navBar">
                <div>

                    <h3 style={{color:"white"}}>Mr-Morsalin</h3>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li> 
                           About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <button><Link to="/signUp">Sign Up</Link></button>
                </div>
                <div>
                    <FiMenu className="fiMenu" onClick={toogle} />
                </div>
            </nav>
        </>
    )
}

export default Navbar
