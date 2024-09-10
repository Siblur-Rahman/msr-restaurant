import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await axiosSecure('/users',{
                headers: {
                    authorization: `Bear ${localStorage.getItem('access-token')}`
                }
            });
            return res.data
        }
    });
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
                axiosSecure.delete(`/user/${id}`)
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
    const handleRole = user =>{
        axiosSecure.patch(`/user/admin/${user._id}`)
        .then(res =>{
            console.log(res)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is Admin naw`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl uppercase">Total users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-2xl uppercase">name</th> 
                  <th className="text-2xl uppercase">email</th>
                  <th className="text-2xl uppercase">role</th>
                  <th className="text-2xl uppercase">action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) =><tr key={user._id}>
                  <th>
                    <label>
                      {index+1}
                    </label>
                  </th>
                  <td>
                    {user.name}
                </td>
                  <td>
                    {user.email}
                  </td>
                  <th>
                    {
                        user?.role==="Admin"? "Admin":
                        <button 
                        onClick={()=>handleRole(user)} 
                        className="btn btn-ghost bg-orange-300 btn-xs">
                            <FaUser className="text-white text-2xl"/>
                        </button>
                    }
                  </th>
                  <th>
                    <button onClick={()=>handleDelete(user._id)} className="btn btn-ghost btn-xs">
                        <FaTrashAlt className="text-red-600"/>
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

export default AllUsers;