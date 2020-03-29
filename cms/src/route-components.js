import { routeNaming } from './routes/routes';
import { Login } from './pages/login';
import {Registration} from "./pages/registration/registration";
import {BusinessInfo} from "./pages/business-info/business-info";
import { ForgotPassword } from './pages/forgot-password';
import { SetPassword } from './pages/set-password';

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
    name: routeNaming.FORGOT_PASSWORD,
    component: ForgotPassword,
  },
  {
    name: routeNaming.SET_PASSWORD,
    component: SetPassword,
  },
  {
    name: routeNaming.CATCH_ALL,
    component: Login,
  }
];

export { routeConfig };
