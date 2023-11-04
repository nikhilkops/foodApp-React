import axios from "axios";



const customFetch = axios.create({
  baseURL: "https://foodapp-backend-b38s.onrender.com/api/v1",
});

export default customFetch;