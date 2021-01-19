import axios from 'axios';
import { BASIC_AUTH_CLIENT, BASIC_AUTH_PASS, URL } from '@/configs';

const baseURL = `${URL}`;

const webservice = axios.create({
  baseURL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'multipart/form-data',
  },
  auth: {
    username: BASIC_AUTH_CLIENT,
    password: BASIC_AUTH_PASS,
  },
});

export const setToken = (token) => {
  webservice.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default webservice;
