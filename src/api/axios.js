import axios from 'axios';

const API = axios.create({
  baseURL: 'https://book-store-pro-4e4e.onrender.com',
});

export default API;

