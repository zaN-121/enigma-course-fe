import axios from 'axios'
import {getToken} from "../utils/token";

const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Baerer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.Reject(err)
    }
)

export default axiosInstance;