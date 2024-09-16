import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCarts();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((total, item) =>total + item.price, 0);
    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                .then(res =>{
                    console.log(res)
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          refetch();
                    }
                })
            }
          });
    }
    return (
    <div>
        <div className="flex justify-evenly">
            <h2 className="text-4xl">Items: {cart.length}</h2>
            <h2 className="text-4xl">Tolal Price: {totalPrice}</h2>
            {cart.length? <Link to={`/dashboard/payment`}>
              <button className="btn btn-primary">pay</button>
              </Link>
              :
              <button disabled className="btn btn-primary">pay</button>
              }
        </div>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th className="text-2xl uppercase">item Image</th>
              <th className="text-2xl uppercase">item name</th>
              <th className="text-2xl uppercase">price</th>
              <th className="text-2xl uppercase">action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) =><tr key={item._id}>
              <th>
                <label>
                  {index+1}
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src={item.image}
                            alt="Item image" />
                        </div>
                    </div>
                </div>
            </td>
              <td>
                {item.name}
              </td>
              <td>${item.price}</td>
              <th>
                <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs">
                    <FaTrashAlt/>
                </button>
              </th>
            </tr>)

            }
          </tbody>
        </table>
      </div>
    </div>

    );
};

export default Cart;