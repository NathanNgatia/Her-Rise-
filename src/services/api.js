import axios from 'axios';
import router from '../router/index';
import TokenService from './token.services';

const api = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        "Content-Type": "application/json",
       Accept: "application/json",
    },
});


api.interceptors.request.use(
    (config) => {
      const token = TokenService.getToken();
      if (token) {
        config.headers.Authorization = 'Bearer  + ${token}'; 
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  
// Interceptor to handle global authentication errors
api.interceptors.response.use(
  (response) => {
      return response;
  },
  (error) => {
      if (error.response && error.response.status === 401) {
          TokenService.removeToken();
          router.push({ name: 'Home' });
      }
      return Promise.reject(error);
  }
);


  export default api;