import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from './../../../hooks/useCarts';


const Navbar = () => {
    const {user, logOut} = useAuth();
    // const [cartsItems, setCartsItems] = useState([]);
    // const axiosSequre = useAxiosSecure();
    const [cart] = useCarts();
    // useEffect(() =>{
        // const getData = async () =>{
        //     const {data} = await axiosSequre("/carts");
        //     setCartsItems(data)
        // }
        // getData()

        // axiosSequre("/carts")
        // .then(res =>{
        //     setCartsItems(res.data)
        // })
    // }, [])
    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.log(error))
    }
    const links=[
        {
            title:"Home",
            path:"/"
        },
        {
            title:"Menu",
            path:"menu"
        },
        {
            title:"Order",
            path:"order/salad"
        },
        {
            title:"Secret",
            path:"secret"
        },
        {
            title:"",
            path:"/"
        },
    ]
    return (
<>
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links.map((link, ind) =><li key={ind}><Link to={link.path}>{link.title}</Link></li>)}
            {user && <li><Link to="logout">Log out</Link></li>}
            {!user && <li><Link to="login">Login</Link></li>}
            </ul>
            </div>
            <a className="btn btn-ghost text-xl">MSR Restuarant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {links.map((link, ind) =><li key={ind}><Link to={link.path}>{link.title}</Link></li>)}

            <li><Link to="/dashboard/cart">
                    <button className="btn">
                    <FaShoppingCart />
                        <div className="badge badge-secondary">
                            {/* {cartsItems.length} */}
                           + {cart.length}
                            </div>
                    </button>
            </Link></li>
            {!user && <li><Link to="login">Login</Link></li>}
            </ul>
            {user && <button onClick={handleLogOut}>LogOut</button>}
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
        </div>
        </>
    );
};

export default Navbar;