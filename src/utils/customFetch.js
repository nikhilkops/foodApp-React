import axios from "axios";
const URL = process.env.BACKEND_URL; 
const customFetch = axios.create({
    baseURL:`${URL}/api/v1`
})

export default customFetch;