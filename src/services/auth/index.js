import webservice from '@/services/webservice';
// import { BASIC_AUTH_CLIENT, BASIC_AUTH_PASS } from '@/configs';

const authorization = (username, password) => webservice
  .post('/oauth/token', {
    grant_type: 'password',
    username,
    password,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
export default {
  authorization,
};
