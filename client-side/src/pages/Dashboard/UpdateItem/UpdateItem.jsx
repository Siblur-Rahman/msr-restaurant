import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const {_id, name, recipe, category, price} = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        reset
      } = useForm()
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
            
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                //   reset();
            }
        }
        console.log(res.data)
    }
    return (
        <div>
            <SectionTitle heading={'Update item'}/>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-ful my-6">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input placeholder="Recipe Name" defaultValue={name} className="input input-bordered w-full" {...register("name")} />
                    </div>
                    <div className="flex gap-6">
                        {/* Category */}
                        <div className="w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Recipe name*</span>
                            </label>
                            <select defaultValue={category} {...register("category")} className="select select-bordered w-full">
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
                            <input  defaultValue={price} placeholder="Price" className="input input-bordered w-full" {...register("price")} />
                        </div>
                    </div>
                    {/* Recipe Details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Recipe Details*"></textarea>
                    </label>
                    {/* file-input */}
                    <div>
                        <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs my-6" />
                    </div>
                    {/* Submit */}
                    <button className="btn bg-orange-400 text-white">
                        Update Recipe Details
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;