import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  timeout: 8000,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM2OGZiOTQ3NzVmODZkMmNlOTdkZTciLCJmaXJzdE5hbWUiOiJNZCIsImxhc3ROYW1lIjoic2lhbSIsImVtYWlsIjoic2lhbUBnbWFpbC5jb20iLCJzdGF0dXMiOjEsInR5cGUiOjEsImlhdCI6MTY3OTIxMDE0OCwiZXhwIjoxNjgwNTA2MTQ4fQ.UbHeIKNNymdcT92i0gHipEJbfQRXrCzDVRL1Z3R9rOQ"
  },
});
export default api;