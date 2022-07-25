import axios from "axios";

const request = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "http://43.142.37.253:8080/",
});

export default request;
