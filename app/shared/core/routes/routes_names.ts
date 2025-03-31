export const FEATURES_PATH = 'features';
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
  USERS = `${FEATURES_PATH}/users/${PRESENTATION_FOULDER}/user_page`,
  USERS_BY_ID = `${FEATURES_PATH}/users/${PRESENTATION_FOULDER}/[id]`,
  TABS_EXEMPLE = `${FEATURES_PATH}/tabs_exemple/${PRESENTATION_FOULDER}/(tabs)`,
  NOT_FOUND = '+not-found',

  INITIAL_ROUTE = AppRoutes.HOME,
}