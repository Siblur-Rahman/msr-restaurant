import {useQuery} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCarts = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    //  Tanstack Query
    const {refetch, data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
    queryFn: 
    // fetch(`${import.meta.env.VITE_API_URL}/carts`)
    // .then(res => res.json())
    async () =>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data
        }
              
    })
    return [cart, refetch]
};

export default useCarts;