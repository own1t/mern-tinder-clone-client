import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-tinder-clone.herokuapp.com",
});

export default instance;
