import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="text-compartment">
                <h1 className=' text-5xl hover:text-red-400 text-zinc-700 font-serif my-7 pl-3 font-bold w-3/4'>Explore Our New Design!</h1>
                <h1 className=' text-5xl text-gray-600 hover:text-orange-500 pl-4 font-mono my-3 font-bold w-3/4'>Get Your Comfortable Fashion</h1>
                <p className=' text-xl px-4 w-3/4'>Welcome to TUFFA FASHION, your shopping destination for fashion online. We offer fashion and quality at the best price in a more sustainable way.</p>
            </div>
            <div className="img-compartment">
                <p>Image</p>
                <img src="image.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;