import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:3000" });

// instance.defaults.withCredentials = true; Para recibir cookies

export default instance;
