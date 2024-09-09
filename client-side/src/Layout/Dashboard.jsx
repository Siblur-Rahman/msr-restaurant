import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaRev, FaSearch, FaShoppingCart } from "react-icons/fa";
import useCarts from "../hooks/useCarts";

const Dashboard = () => {
    const [cart] = useCarts();
    // ToDo: get isAmin from the database
    const isAdmin = true;
    return (
        <div className="flex">
            {/*dashboard sidebar*/}
            <div className="w-64 h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li><NavLink to="/userHome">
                        <FaHome />
                        User Home</NavLink>
                    </li>
                    <li><NavLink to="/reservation">
                        <FaCalendar />
                        Reservation</NavLink>
                    </li>
                    <li><NavLink to="/review">
                        <FaAd />
                        Add Review</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/cart">
                        <FaShoppingCart />
                        My Cart ({cart?.length})</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/bookings">
                        <FaList />
                        My Booking</NavLink>
                    </li>

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li><NavLink to="/">
                        <FaHome />
                        Home</NavLink>
                    </li>
                    <li><NavLink to="/order/salad">
                        <FaSearch />
                        Menu</NavLink>
                    </li>
                    <li><NavLink to="/order/salad">
                        <FaEnvelope />
                        Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard Content */}
            <div className="flex-1 p-8">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;