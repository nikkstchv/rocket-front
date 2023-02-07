import axios from "axios";


export const API = axios.create({
  baseURL: "http://localhost:3003/",
  validateStatus(status) {
    return status >= 200 && status < 300;
  },
});
