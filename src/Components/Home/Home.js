import React from 'react';
import TopThreeReviews from '../TopThreeReviews/TopThreeReviews';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-container px-7 pt-10 flex md:justify-between items-center w-full'>
                <div className="text-compartment">
                    <h1 className=' text-5xl hover:text-red-400 text-zinc-700 font-serif my-7 pl-3 font-bold w-3/4'>Explore Our New Design!</h1>
                    <h1 className=' text-5xl text-gray-600 hover:text-orange-500 pl-4 font-mono my-3 font-bold w-3/4'>Get Your Desair Fashion</h1>
                    <p className=' text-xl px-4 w-3/4'>Welcome to TUFFA FASHION, your shopping destination for fashion online. We offer fashion and quality at the best price in a more sustainable way.</p>
                    <br />
                    <button className=' hover:bg-red-500 hover:text-white my-7  w-2/4
                     text-xl text-stone-800 bg-orange-200 mx-auto  mr-52'>Explore a demo</button>

                </div>
                <div className="img-compartment">

                    <img className=' pr-12' src="image.jpg" alt="" />
                </div>
            </div>
            <TopThreeReviews></TopThreeReviews>
        </div>
    );
};

export default Home;