import React, { useContext } from 'react';
import { ClothContext } from '../../App';
import CustomersReview from '../CustomersReview/CustomersReview';

const Reviews = () => {
    const [clothes, setClothes] = useContext(ClothContext);
    // console.log(clothes)
    return (
        <div>
            <h3 className=' text-5xl text-slate-600'>This is review page!!!</h3>
            <h2 className=' text-3xl'>number: {clothes.length}</h2>
            <div className=' grid grid-cols-3'>
                {
                    clothes.map(cloth => <CustomersReview
                        key={cloth._id}
                        cloth={cloth}
                    ></CustomersReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;