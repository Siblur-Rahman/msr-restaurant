import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItem = () => {
    const {
        register,
        handleSubmit,
        reset
      } = useForm()
      const axiosPublic = useAxiosPublic()
      const axiosSecure = useAxiosSecure()
    
      const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers:{"content-type" : 'multipart/form-data'

            }
        })
        if(res.data.success){
            // now send the menu item data to the server with the imagee link
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset()
            }
        }
        console.log(res.data)
    }
        
      return (
       <>
            <SectionTitle heading={'Add a item'} subHeading={"What's New?"}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-ful my-6">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input placeholder="Recipe Name" className="input input-bordered w-full" {...register("name")} />
                </div>
                <div className="flex gap-6">
                    {/* Category */}
                    <div className="w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <select {...register("category")} className="select select-bordered w-full">
                            <option disabled selected>Select a Category</option>
                            <option value="salad">salad</option>
                            <option value="pizza">pizza</option>
                            <option value="soup">soup</option>
                            <option value="dessert">dessert</option>
                            <option value="drinks">drinks</option>
                        </select>
                    </div>
                    {/* price */}
                    <div className="w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input  placeholder="Price" className="input input-bordered w-full" {...register("price")} />
                    </div>
                </div>
                {/* Recipe Details */}
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe Details*</span>
                    </div>
                    <textarea {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Recipe Details*"></textarea>
                </label>
                {/* file-input */}
                <div>
                    <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs my-6" />
                </div>
                {/* Submit */}
                <button className="btn bg-orange-400 text-white">
                    Add Item <FaUtensils className="ml-3"/>
                </button>
            </form>
       </>
      )
};

export default AddItem;