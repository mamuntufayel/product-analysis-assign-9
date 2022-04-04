import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className=' my-20'>
                <p className=' font-medium text-2xl'>Q: What is context api?</p>
                <p className=' text-xl'><span className='font-medium text-2xl'>Ans</span>:Context api is a state that is used to pass the same object or array all the components.Context API is the way to create global variables that can be passed around the component tree.It works as a proxy of props.We can easily transfer the props to all components at a time in a easy way.Using context api we can easily pass the result to all children component also and make our coding easier.</p>
            </div>
            <div>
                <p className=' font-medium text-2xl'>What is semantic tag?</p>
                <p className=' text-xl'><span className='font-medium text-2xl'>Ans</span>:Semantic tag is used to make coding clean and clear and easy to determine.These tag are different from each other.They are use to declare any part of modern HTML.There status also different from each other.They have unique character.They have their own position and easy to recognize. Example:header, section, nav, aside, article, footer etc </p>
            </div>
        </div>
    );
};

export default Blogs;