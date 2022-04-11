import axios from "axios";

let SERVER_URL = "https://akshu-diet-app.herokuapp.com/";

const authaxios = axios.create({
  baseURL: SERVER_URL,
});

export default authaxios;
