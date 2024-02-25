import axios from "axios";

// CORS issue therefore, just and example of bare minimum for api instance

// pass here some config and interceptors
const apiInstance = axios.create({
  baseURL: "https://notify.dropboxapi.com",
  //   baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
