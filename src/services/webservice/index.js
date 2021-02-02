import axios from 'axios';
import { URL } from '@/configs';
import router from '@/router';

const baseURL = `${URL}`;
const webservice = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});

export const setToken = (token) => {
  webservice.defaults.headers.common.Authorization = `Bearer ${token}`;
};
webservice.interceptors.response.use((response) => response,
  (error) => {
    if (error.response.status === 401) {
      if (router.currentRoute.name !== 'Login') router.push({ name: 'Login' });
    }
  });
export default webservice;
