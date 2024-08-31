import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className='flex space-x-2'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[100px] rou'  src={image} alt="" />
            <div>
                <h3 className='uppercase '>{name}--------</h3>
                <p>${recipe}</p>
            </div>
            <p className='text-yellow-400'>{price}</p>
        </div>
    );
};

export default MenuItem;