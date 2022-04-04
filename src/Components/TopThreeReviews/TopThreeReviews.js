import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClothContext } from '../../App';
import ThreeReviews from '../ThreeReviews/ThreeReviews';

const TopThreeReviews = () => {
    const navigate = useNavigate();
    const [clothes, setClothes] = useContext(ClothContext);
    return (
        <div>
            <p>Customers Reviews</p>
            <div className=' grid grid-cols-3 gap-3'>
                {
                    clothes.slice(0, 3).map(cloth => <ThreeReviews
                        cloth={cloth}
                    ></ThreeReviews>)
                }
            </div>
            <button onClick={() => navigate("/reviews")} className='text-xl bg-red-400 text-slate-900 hover:bg-green-900 hover:text-white my-7 w-60'>See All Reviews</button>
        </div>
    );
};

export default TopThreeReviews;