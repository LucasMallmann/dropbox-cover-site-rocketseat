import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://omnistack-backend-rocketseat.herokuapp.com'
});

export default axiosInstance;