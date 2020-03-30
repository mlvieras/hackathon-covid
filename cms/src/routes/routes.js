import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const routeNaming = {
  CATCH_ALL: 'catchAll',
  LOGIN: 'login',
  REGISTER: 'register',
  BUSINESS_INFO: "businessInfo",
  FORGOT_PASSWORD: 'forgotPassword',
  SET_PASSWORD: 'setPassword',
  DASHBOARD: 'dashboard'
};

const PATH_PARAM_REGEX = /:[^/]+/gi;
/**
 Analyzes the path defined for `route` and
 returns a copy of the route with a new attribute
 `pathParams` which is a list of strings that correspond to the path params.

 @param {object} route - Object that represents a route.

 @return {object} updated route with the new attribute.

 @example

 determineRouteParams({ name: 'product', path: '/product/:id', component: ProductPage })
 */
const determineRouteParams = (route) => {
  const newRoute = {...route};
  const {path} = newRoute;
  // Extract the names of the parameters
  const pathMatch = path.match(PATH_PARAM_REGEX) || [];
  const pathParams = pathMatch.map(param => param.slice(1));
  newRoute.pathParams = pathParams || [];
  return newRoute;
};

const routes = [
  {
    name: routeNaming.LOGIN,
    path: '/login',
  },
  {
    name: routeNaming.REGISTER,
    path: '/register'
  },
  {
    name: routeNaming.BUSINESS_INFO,
    path: '/businessInfo'
  },
  {
    name: routeNaming.FORGOT_PASSWORD,
    path: '/forgot-password',
  },
  {
    name: routeNaming.SET_PASSWORD,
    path: '/set-password',
  },
  {
    name: routeNaming.DASHBOARD,
    path: '/dashboard',
  },
  {
    // TODO: use a catch all component like a 404
    name: routeNaming.CATCH_ALL,
    path: '*',
  },
].map(determineRouteParams);

export {
  determineRouteParams,
  history,
  routeNaming,
  routes,
};
