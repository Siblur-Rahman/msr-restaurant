import axios from "axios";



export const axiosSecure = axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`
});


const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        console.log('test', token)
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      })

    return axiosSecure;
};

export default useAxiosSecure;