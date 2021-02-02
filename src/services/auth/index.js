import webservice, { setToken } from '@/services/webservice';

export default class Auth {
  static async accessToken(token) {
    setToken(token);
  }

  static async authorization(formData) {
    return webservice.post('oauth/token', formData, { auth: { username: process.env.VUE_APP_BASIC_AUTH_CLIENT, password: process.env.VUE_APP_BASIC_AUTH_PASS } })
      .then((response) => {
        setToken(response.data.access_token);
        return response.data;
      })
      .catch((error) => error.response.data.error);
  }

  static async userDetails() {
    return webservice.get('/api/user-auth').then((response) => response.data);
  }
}
