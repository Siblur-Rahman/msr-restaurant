import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import menuImg from "../../assets/menu/menu-bg.jpg"
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";

// image import
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import { Link } from "react-router-dom";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    return (
        <div>
            <Helmet>
                    <title>Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"} text={"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}/>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"/>
            <MenuCategory items={offered}/>
            {/* <div className="text-center">
                    <Link to="/order">
                        <button className="btn btn-outline uppercase border-0 border-b-4 mt-10">ORDER YOUR FAVOURITE FOOD</button>
                    </Link>
                </div> */}
            
            <MenuCategory items={dessert} coverTitle={"dessert"} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptate nisi similique impedit laborum perspiciatis earum quas dolorem harum exercitationem saepe optio excepturi, asperiores blanditiis inventore perferendis, ad cumque nobis laudantium doloremque atque natus eligendi! Tenetur quae asperiores accusamus corporis. Quidem quaerat iure, quas ad cupiditate obcaecati at aliquid ratione.'} coverImg={dessertImg}/>

            <MenuCategory items={soup} coverTitle={"soup"} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptate nisi similique impedit laborum perspiciatis earum quas dolorem harum exercitationem saepe optio excepturi, asperiores blanditiis inventore perferendis, ad cumque nobis laudantium doloremque atque natus eligendi! Tenetur quae asperiores accusamus corporis. Quidem quaerat iure, quas ad cupiditate obcaecati at aliquid ratione.'} coverImg={dessertImg}/>

            <MenuCategory items={salad} coverTitle={"salad"} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptate nisi similique impedit laborum perspiciatis earum quas dolorem harum exercitationem saepe optio excepturi, asperiores blanditiis inventore perferendis, ad cumque nobis laudantium doloremque atque natus eligendi! Tenetur quae asperiores accusamus corporis. Quidem quaerat iure, quas ad cupiditate obcaecati at aliquid ratione.'} coverImg={dessertImg}/>

            <MenuCategory items={pizza} coverTitle={"pizza"} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptate nisi similique impedit laborum perspiciatis earum quas dolorem harum exercitationem saepe optio excepturi, asperiores blanditiis inventore perferendis, ad cumque nobis laudantium doloremque atque natus eligendi! Tenetur quae asperiores accusamus corporis. Quidem quaerat iure, quas ad cupiditate obcaecati at aliquid ratione.'} coverImg={dessertImg}/>
    </div>
    );
};

export default Menu;