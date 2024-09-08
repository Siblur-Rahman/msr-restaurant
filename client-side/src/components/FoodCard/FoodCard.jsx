import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCarts from '../../hooks/useCarts';

const FoodCard = ({item}) => {
  const {_id, name, image, price, recipe} = item;
  let location = useLocation();
  const navigate = useNavigate();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const [, refetch] = useCarts()
  const handleAddToCart = () =>{
    if(user && user.email){
      // send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
    //   fetch(`http://localhost:5000/carts`,{
    //     method:"POST",
    //     headers:{"Content-type":"application/json"},
    //     body:JSON.stringify(cartItem)
    //   })
    //   .then(res => res.json())
    //   .then(data =>{
    //     console.log(data)

        // we can show alert Here

    // })

        // axios.post(`http://localhost:5000/carts`, cartItem)
        axiosSecure.post('/carts', cartItem)
        .then(res =>{
          console.log(res.data)
          // showing sweetalert Conditionaly Start
          if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Added to cart Successfully`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch the Cart to update the count
          refetch()
        }
          // showing sweetalert Conditionaly End
      })
    }else{
      // redirect to Login page
          // showing sweetalert Conditionaly Start
      Swal.fire({
        title: "You are not logged in",
        text: "Plese login to add to the Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(result)
          // send the user to the login page
          navigate("/login", { state: { from: location }});
        }
      })
      .catch(err=>{
        console.log(err)
      })
          // showing sweetalert Conditionaly End
    }
    console.log(food, user.email)
  }
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
      <button onClick={handleAddToCart} className="btn btn-outline bg-slate-100 border-orange-400 uppercase border-0 border-b-4 mt-10">Add TO Card</button>

    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;
