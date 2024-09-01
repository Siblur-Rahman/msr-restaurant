import React from 'react';

const FoodCard = ({item}) => {
  const {name, image, price, recipe} = item;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="FoodCard" />
  </figure>
  <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4'>${price}</p>
  <div className="card-body flex flex-1 items-center">
    <h2 className="card-title">{name}</h2>
    <p>I{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-100 border-orange-400 uppercase border-0 border-b-4 mt-10">Add TO Card</button>

    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;