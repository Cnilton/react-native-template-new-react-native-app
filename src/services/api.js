import axios from 'axios';

const api = axios.create({
  baseURL: 'https://url.com.br/',
  method: 'post',
  config: {headers: {'Content-Type': 'multipart/form-data'}},
  timeout: 1000 * 30,
});

export default api;
