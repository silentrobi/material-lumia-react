import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';

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
        </>
    );
}

export default Home;
