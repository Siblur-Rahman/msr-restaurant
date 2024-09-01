
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popular = menu.filter(item => item.category === "popular")
    return (
        <section className="mb-12">
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Popular Items"}
            />
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item =><MenuItem item={item}/>)
                }
            </div>
            <div className="text-center">
            <button className="btn btn-outline uppercase border-0 border-b-4 mt-10 text-center">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;