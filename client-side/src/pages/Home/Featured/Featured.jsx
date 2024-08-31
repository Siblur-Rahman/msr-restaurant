import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-item text-white bg-fixed my-10">
            <div className="">
            <SectionTitle subHeading={'check it out'} heading={'Featured Item'}/>
            <div className="md:flex justify-center bg-slate-400 opacity-55 items-center py-20 px-36">
                <div>
                    <img className="z-10" src={featuredImg}/>
                </div>
                <div className="md:ml-10 z-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quis. Dolor illum blanditiis accusamus labore aliquam nesciunt quaerat non. Facilis illo soluta expedita perspiciatis voluptatum, totam, ea iste velit doloribus dicta quos neque placeat veritatis recusandae ipsam vitae natus nemo rerum? Illum tenetur officiis adipisci similique accusantium labore, quas earum.</p>
                    <button className="btn btn-outline uppercase border-0 border-b-4 mt-10">order now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;