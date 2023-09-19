// axiosInstance.js

import axios from 'axios';
//let person = Person()
const refresh_token = localStorage.getItem("refresh_token")
console.log("Token in instance v"+refresh_token)
const axiosInstance = axios.create({
  baseURL: 'https://modcom.pythonanywhere.com/api', // Replace with your API's base URL
  timeout: 30000, // Adjust the timeout as needed (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Set the default content type for requests
    'Authorization': `Bearer ${refresh_token}`
  },
});

export default axiosInstance;
