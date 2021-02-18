import Auth from '@/services/auth';
import Requirements from '@/services/requirements';
import Movies from '@/services/movies';

const services = () => ({
  Auth,
  Requirements,
  Movies,
});

export default services();
