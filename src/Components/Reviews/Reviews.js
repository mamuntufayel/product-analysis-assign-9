import React, { useContext } from 'react';
import { ClothContext } from '../../App';
import CustomersReview from '../CustomersReview/CustomersReview';

const Reviews = () => {
    const [clothes, setClothes] = useContext(ClothContext);
    // console.log(clothes)
    return (
        <div>
            <p className=' text-5xl text-slate-600 hover:text-rose-200 transition-transform'>Here is some Reviews</p>

            <div className=' grid grid-cols-3 gap-3'>
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