import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import Animation from '../components/Animation';
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
            <Animation/>
        </>
    );
}

export default Home;
