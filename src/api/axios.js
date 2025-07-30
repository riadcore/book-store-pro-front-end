import axios from 'axios';

const API = axios.create({
  baseURL: 'https://book-store-pro-4e4e.onrender.com',
  withCredentials: true, // Optional: for sending cookies
});

export default API;
