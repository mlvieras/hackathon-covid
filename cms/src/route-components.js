import { routeNaming } from './routes/routes';
import { Login } from './pages/login';

const routeConfig = [
  {
    name: routeNaming.LOGIN,
    component: Login,
  },
  {
    name: routeNaming.CATCH_ALL,
    component: Login,
  },
];

export { routeConfig };
