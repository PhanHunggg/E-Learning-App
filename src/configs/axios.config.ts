import { BASE_URL, TOKEN_CYBERSOFT } from "./../constants/index";
import axios from "axios";

const axiosRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});


export { axiosRequest };
