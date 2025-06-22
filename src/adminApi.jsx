import axios from "axios"

const adminApi= axios.create({
    baseURL: "https://backend-wq7c.onrender.com/api/admin",
    withCredentials:true,
})

export default adminApi
//"http://localhost:8080/api/admin"
