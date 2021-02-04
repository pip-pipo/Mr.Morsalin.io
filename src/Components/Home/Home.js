import React, { useState } from 'react'
import Main from '../MainHome/Main';
import Navbar from '../Navabar/Navbar'
import About from '../pages/About/About';
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
    const [toggle, setToggle] = useState(false);

    const makeToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <Navbar toogle={makeToggle} />
            <Sidebar toogle={toggle} closeToggle={makeToggle} />
            <Main/>
            <About/>
        </>
    )
}



export default Home