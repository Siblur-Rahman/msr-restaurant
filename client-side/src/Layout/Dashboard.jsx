import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaRev, FaSearch, FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
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
                        My Cart</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/bookings">
                        <FaList />
                        My Booking</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li><NavLink to="/">
                        <FaHome />
                        Home</NavLink>
                    </li>
                    <li><NavLink to="/order/salad">
                        <FaSearch />
                        Menu</NavLink>
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