import axios from "axios";

export const backend = axios.create({
  baseURL: "http://localhost:3030/",
  headers: {
    "Content-Type": "application/json",
  },
});
