import React from 'react';
import CustomLink from '../CustomLink/CustomLink';



const Header = () => {
    return (
        <nav className=' text-xl flex inline-flex '>

            <CustomLink className=' font-mono text-slate-900 font-semibold mx-5' to="/">HOME</CustomLink>
            <CustomLink className=' font-mono text-slate-900 font-semibold mx-5' to="/dashboard">DASHBOARD</CustomLink>
            <CustomLink className=' font-mono text-slate-900 font-semibold mx-5' to="/reviews">REVIEWS</CustomLink>
        </nav>
    );
};

export default Header;