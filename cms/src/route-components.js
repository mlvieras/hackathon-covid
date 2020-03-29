import { routeNaming } from './routes/routes';
import { Login } from './pages/login';
import {Registration} from "./pages/registration/registration";
import BusinessInfo from "./pages/business-info/business-info";

const routeConfig = [
  {
    name: routeNaming.LOGIN,
    component: Login,
  },
  {
    name: routeNaming.REGISTER,
    component: Registration
  },
  {
    name: routeNaming.BUSINESS_INFO,
    component: BusinessInfo
  },
  {
    name: routeNaming.CATCH_ALL,
    component: Login,
  }
];

export { routeConfig };
