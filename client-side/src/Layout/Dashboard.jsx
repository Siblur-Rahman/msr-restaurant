import { NavLink, Outlet } from "react-router-dom";
import {FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCarts();
    // ToDo: get isAmin from the database
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/*dashboard sidebar*/}
            <div className="w-64 h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin? 
                            <>
                                <li><NavLink to="/dashboard/adminHome">
                                    <FaHome />
                                    Admin Home</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/addItem">
                                    <FaUtensils />
                                    addItems</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/manageitems">
                                    <FaList />
                                    manage Items</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/bookings">
                                    <FaBook />
                                    Manage bookings</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/users">
                                    <FaUsers />
                                    All users</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/bookings">
                                    <FaList />
                                    My Booking</NavLink>
                                </li>
                            </>
                        :
                            <>
                                <li><NavLink to="/dashboard/userHome">
                                    <FaHome />
                                    User Home</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/history">
                                    <FaCalendar />
                                    paymentHistory</NavLink>
                                </li>
                                <li><NavLink to="/review">
                                    <FaAd />
                                    Add Review</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/cart">
                                    <FaShoppingCart />
                                    My Cart ({cart?.length})</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/paymentHistory">
                                    <FaList />
                                    My Booking</NavLink>
                                </li>
                            </>
                    }

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