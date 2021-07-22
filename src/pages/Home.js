import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import Animation from '../components/Animation';
import InfoSection from '../components/InfoSection';
import { aboutHomeObj, discoverHomeObj, signupHomeObj } from '../components/InfoSection/data';
import { Grid } from '@material-ui/core';
import Services from '../components/Services';
import Footer from '../components/Footer';
const Home = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <Sidebar mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle} />
            <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <Animation />
            <InfoSection {...aboutHomeObj} />
            <InfoSection {...discoverHomeObj} />
            <InfoSection {...signupHomeObj}/>
            <Services/>
            <Footer/>
        </>
    );
}

export default Home;
