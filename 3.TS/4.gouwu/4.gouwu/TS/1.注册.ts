import axios from "axios";
let http = axios.create({
  baseURL: "http://localhost:8888",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    let token = localStorage.getItem("token");
    config.headers["authorization"] = token;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

export { http };
export default http;
