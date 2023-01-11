import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  timeout: 8000,
  headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
  },
});
export default api;