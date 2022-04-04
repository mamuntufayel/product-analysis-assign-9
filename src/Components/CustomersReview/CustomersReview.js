import React from 'react';
import './CustomersReview.css'

const CustomersReview = (props) => {
    const { review, picture, customername, ratings } = props.cloth;
    return (
        <div className='each-container flex flex-col items-center border-2'>
            <img src={picture} alt="" />
            <p>Customer's Name:{customername}</p>
            <p className=' w-3/4'>Review:{review}</p>
            <p>Ratings: {ratings}</p>
        </div>
    );
};

export default CustomersReview;