import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";

const AddItem = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      console.log(watch("example")) // watch input value by passing the name of it
    
      return (
       <>
            <SectionTitle heading={'Add a item'} subHeading={"What's New?"}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} />
                <select className="select select-bordered w-full max-w-xs">
                    <option {...register("category")} disabled selected>Select a Category</option>
                    <option value="salad">salad</option>
                    <option value="pizza">pizza</option>
                    <option value="soup">soup</option>
                    <option value="dessert">dessert</option>
                    <option value="drinks">drinks</option>
                </select>
                <input type="submit" />
            </form>
       </>
      )
};

export default AddItem;