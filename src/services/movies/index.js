import webservice from '@/services/webservice';

export default class Movies {
  static async getMovies() {
    return webservice.get('/api/movies')
      .then((response) => response.data)
      .catch((error) => error.data);
  }

  static async putMovie(movie) {
    return webservice.put('/api/movies', movie)
      .then((response) => response.data)
      .catch((error) => error.data);
  }

  static async deleteMovie(movieId) {
    return webservice.delete(`/api/movies/${movieId}`)
      .then((response) => response.data)
      .catch((error) => error.data);
  }
}
