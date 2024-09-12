import axios from "axios";



export const axiosSecure = axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`
});


const useAxiosSecure = () => {
    // request interceptors to add authorization header for very secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        // console.log('test', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      })
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, (error) =>{
        const status = error.response.status;
        console.log('Test erroe', status)
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;