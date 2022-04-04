import React, { useContext } from 'react';
import { ClothContext } from '../../App';

const Reviews = () => {
    const [clothes, setClothes] = useContext(ClothContext);
    console.log(clothes)
    return (
        <div>
            <h3 className=' text-5xl text-slate-600'>This is review page!!!</h3>
            <h2>number: {clothes.length}</h2>
        </div>
    );
};

export default Reviews;