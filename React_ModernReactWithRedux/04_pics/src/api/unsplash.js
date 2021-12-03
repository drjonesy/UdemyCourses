import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID jokBCnEsN4ocOM0LsSn5v_OvPyrD6j3XSHQwIl7u0uE",
  },
});
