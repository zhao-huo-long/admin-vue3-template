import axios from 'axios';

const request = axios.create({
  baseURL: "http://localhost:3001",
});

request.interceptors.response.use(function (response,) {
  return response
});

request.get('/');

export default request;