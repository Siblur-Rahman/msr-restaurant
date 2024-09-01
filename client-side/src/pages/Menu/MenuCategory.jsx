import { Link } from "react-router-dom";
import Cover from "../shared/Cover/Cover";
import MenuItem from "../shared/MenuItem/MenuItem";

const MenuCategory = ({items, coverTitle, coverImg, text}) => {
    return (
        <div className="mt-10">
            {coverTitle && <Cover img={coverImg} title={coverTitle} text={text}/>}
            <div className="grid md:grid-cols-2 gap-10 mt-8">
                {
                    items.map(item =><MenuItem item={item}/>)
                }
            </div>
            {/* {
                coverTitle &&
                <div className="text-center">
                <Link to={`/order/${coverTitle}`}>
                    <button className="btn btn-outline uppercase border-0 border-b-4 mt-10">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
            } */}
            <div className="text-center">
                <Link to={`/order/${coverTitle}`}>
                    <button className="btn btn-outline uppercase border-0 border-b-4 mt-10">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;