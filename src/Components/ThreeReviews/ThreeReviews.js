import React from 'react';

const ThreeReviews = (props) => {
    const { review, picture, customername, ratings } = props.cloth;
    return (
        <div className='each-container flex flex-col items-center border-2 gap-5'>
            <img src={picture} alt="" />
            <p>Customer Name:{customername}</p>
            <p className=' w-3/4'>Review:{review}</p>
            <p>Ratings: {ratings}</p>
        </div>
    );
};

export default ThreeReviews;