import axios from "axios"

const API = axios.create({
  baseURL: "https://hrms-lite-ipg1.onrender.com"
})

export default API