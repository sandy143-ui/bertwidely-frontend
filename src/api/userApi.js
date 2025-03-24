import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api', // Your backend URL
});

export const fetchUsers = () => API.get('/users');
export const createUser = (userData) => API.post('/users', userData);
