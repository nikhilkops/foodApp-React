import axios from "axios";



const customFetch = axios.create({
  baseURL: "https://foodapp-backend-z289.onrender.com/api/v1/",
});

export default customFetch;