import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaCaravan, FaDollarSign, FaUsers } from "react-icons/fa";

const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: stats} = useQuery({
        queryKey:['admin-stats'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                <span className="text-yellow-300">                
                    {
                    user?.displayName ? user.displayName : 'Back'
                    } 
                </span>
            </h2>
            <div className="stats shadow">
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaDollarSign className="text-5xl"/>
                </div>
                <div className="stat-title">Revenue</div>
                <div className="stat-value text-3xl">${stats?.revenue}</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaUsers className="text-5xl"/>
                </div>
                <div className="stat-title">Users</div>
                <div className="stat-value text-3xl">{stats?.users}</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaBook className="text-5xl"/>
                </div>
                <div className="stat-title">Menu Items</div>
                <div className="stat-value text-3xl">{stats?.menuItems}</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaCaravan className="text-5xl"/>
                </div>
                <div className="stat-title">Orders</div>
                <div className="stat-value text-3xl">{stats?.orders}</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
            </div>
        </div>
    );
};

export default AdminHome;