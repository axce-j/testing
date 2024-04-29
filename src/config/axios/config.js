import  Axios  from "axios";
import { BASE_API_URL } from "../../export";

const axios =Axios.create({
    baseURL: BASE_API_URL
})


export {axios}