import axios from 'axios';

const api = axios.create({
   
    baseURL: "https://backend-wq7c.onrender.com/api",
    withCredentials: true,

});

export default api
