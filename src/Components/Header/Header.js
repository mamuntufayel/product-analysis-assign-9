import React from 'react';
import CustomLink from '../CustomLink/CustomLink';



const Header = () => {
    return (
        <nav className=' text-xl flex inline-flex'>

            <CustomLink className=' font-mono text-slate-900 font-semibold mx-5' to="/">Home</CustomLink>
            <CustomLink className=' font-mono text-slate-900 font-semibold mx-5' to="/dashboard">Dashboard</CustomLink>
            <CustomLink className=' font-mono text-slate-900 font-semibold mx-5' to="/reviews">Reviews</CustomLink>
        </nav>
    );
};

export default Header;