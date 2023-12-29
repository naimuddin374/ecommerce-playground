import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  timeout: 8000,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ4MWYxODUxNTk2NDk4NGQ5MTJjYjkiLCJmaXJzdE5hbWUiOiJTaWFtIiwibGFzdE5hbWUiOiJIYXdsYWRhciIsImVtYWlsIjoic2lhbUBnbWFpbC5jb20iLCJzdGF0dXMiOjEsInR5cGUiOjEsImlhdCI6MTY5MDI0OTYwMywiZXhwIjoxNjkxNTQ1NjAzfQ.OXTo2Gg3KMEftyQdEjIDp0F9LovNlGFsdUSegSlNNFM"

  },
});
export default api;