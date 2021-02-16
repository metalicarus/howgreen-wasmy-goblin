import webservice from '@/services/webservice';

export default class Requirements {
  static async getGenres() {
    return webservice.get('/api/genres')
      .then((response) => response.data)
      .catch((error) => error.data);
  }

  static async putGenre(genre) {
    return webservice.put('/api/genres', genre)
      .then((response) => response.data)
      .catch((error) => error.data);
  }

  static async deleteGenre(genreId) {
    return webservice.delete(`/api/genres/${genreId}`)
      .then((response) => response.data)
      .catch((error) => error.data);
  }

  static async getCategories() {
    return webservice.get('/api/categories')
      .then((response) => response.data)
      .catch((error) => error.data);
  }

  static async putCategory(category) {
    return webservice.put('/api/categories', category)
      .then((response) => response.data)
      .catch((error) => error.data);
  }

  static async deleteCategory(categoryId) {
    return webservice.delete(`/api/categories/${categoryId}`)
      .then((response) => response.data)
      .catch((error) => error.data);
  }
}
