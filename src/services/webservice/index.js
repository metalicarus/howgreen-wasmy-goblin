import axios from 'axios';
import { URL } from '@/configs';

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
export default webservice;
