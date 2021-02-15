import webservice from '@/services/webservice';

const endPoint = '/api/categories';
export default class Requirements {
  static async getCategories() {
    return webservice.get(endPoint)
      .then((response) => response.data)
      .catch((error) => error.response.data.error);
  }

  static async putCategory(category) {
    return webservice.put(endPoint, category)
      .then((response) => response.data)
      .catch((error) => error.data);
  }
}
