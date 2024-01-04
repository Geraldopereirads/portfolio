import axios from "axios";

const api = axios.create({
    baseURL: "https://portfolio-backend-aw9w.onrender.com",
    timeout: 5000
})

export default api