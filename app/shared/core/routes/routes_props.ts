import { ScreenProps } from "expo-router";
import { AppRoutes } from "./routes_names";

export const getScreenProps = (routeName: AppRoutes): ScreenProps => {
  switch (routeName) {
    case AppRoutes.HOME:
      return {
        name: AppRoutes.HOME,
        options: {
          headerTitle: 'Home',
        },
      };
    case AppRoutes.USERS:
      return {
        name: AppRoutes.USERS,
        options: {
          headerTitle: 'Users',
        },
      };
    case AppRoutes.USERS_BY_ID:
      return {
        name: AppRoutes.USERS_BY_ID,
        options: {
          headerTitle: 'User page',
        }
      };
    case AppRoutes.NOT_FOUND:
      return {
        name: AppRoutes.NOT_FOUND,
        options: {
          headerTitle: 'Not Found',
        },
      };
    default:
      // This exhaustive check ensures all enum values of AppRoutes are handled
      const exhaustiveCheck: never = routeName;
      console.warn(`Unhandled route: ${routeName}`)
      return { name: AppRoutes.NOT_FOUND };
  }
}