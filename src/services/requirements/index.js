import webservice from '@/services/webservice';

export default class Requirements {
  static async getCategories() {
    return webservice.get('/api/categories').then((response) => response.data).catch((error) => error.response.data.error);
  }
}
