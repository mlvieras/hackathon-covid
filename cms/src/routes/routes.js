import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const routeNaming = {
  CATCH_ALL: 'catchAll',
  LOGIN: 'login',
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
  const newRoute = { ...route };
  const { path } = newRoute;
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
