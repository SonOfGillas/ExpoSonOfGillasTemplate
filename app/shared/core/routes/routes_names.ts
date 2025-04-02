export const FEATURES_PATH = '/features';
export const PRESENTATION_FOULDER = 'presentation';

/*
* Expo Router is a file-based routing system 
* that means that the file structure of your app determines the routes.
* The routes are defined by the file names and folder structure.
* The route name must be the same as the file path from the /app directory.
*/
export enum AppRoutes {
  // Basic route path
  HOME = `${FEATURES_PATH}/home/${PRESENTATION_FOULDER}/home`,
  TODO_LIST = `${FEATURES_PATH}/todo_list/${PRESENTATION_FOULDER}/todo_page`,
  TABS_EXEMPLE = `${FEATURES_PATH}/tabs_exemple/${PRESENTATION_FOULDER}/(tabs)`,
  NOT_FOUND = '+not-found',

  INITIAL_ROUTE = AppRoutes.HOME,
}

export const formatRouteName = (routeName: AppRoutes): string => {
  /* 
  * Remove the leading slash from the route name
  * This is necessary because the route name should not start with a slash
  * when using it in the stack navigator (otherwise it doesn't read the options)
  * but it need the / at the beginning of the path when its invoked with router.push
  */
  return routeName.replace(/^\//, '');
}