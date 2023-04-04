import axios from 'axios';

const request = axios.create({
  baseURL: "http://localhost:3000/mock",
});

request.interceptors.response.use(function (response,) {
  return response
});


export default request;