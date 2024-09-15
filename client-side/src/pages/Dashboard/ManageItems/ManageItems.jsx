import { FaEdit, FaTrashAlt} from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
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
                axiosSecure.delete(`/menu/${id}`)
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
            <SectionTitle heading="Manage All Items" subHeading="Hury Uo"/>

            <div className="flex justify-evenly">
                <h2 className="text-4xl uppercase">Total users: {menu.length}</h2>
            </div>
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-2xl uppercase">item image</th> 
                  <th className="text-2xl uppercase">item name</th>
                  <th className="text-2xl uppercase">price</th>
                  <th className="text-2xl uppercase">action</th>
                  <th className="text-2xl uppercase">action</th> 
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {menu?.map((item, index) =><tr key={item._id}>
                  <th>
                    <label>
                      {index+1}
                    </label>
                  </th>
                  <td>
                    <img src={item?.image} alt="" />
                </td>
                  <td>
                    {item?.name}
                  </td>
                  <th>
                    $ {item?.price}
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-lg bg-orange-500">
                        <FaEdit className="text-white"/>
                    </button>
                  </th>
                  <th>
                    <button onClick={()=>handleDelete(item?._id)} className="btn btn-ghost btn-xs">
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

export default ManageItems;