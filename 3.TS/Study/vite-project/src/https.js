import axios from "axios";
let http = axios.create({
  baseURL: "http://localhost:8080",
});




export { http };
export default http;
