import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5109/api"});

export default API;