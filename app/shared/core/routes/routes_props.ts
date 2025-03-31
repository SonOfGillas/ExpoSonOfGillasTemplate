import { ScreenProps } from "expo-router";
import { AppRoutes, formatRouteName } from "./routes_names";

export const getScreenProps = (routeName: AppRoutes): ScreenProps => {
  switch (routeName) {
    case AppRoutes.HOME:
      return {
        name: formatRouteName(AppRoutes.HOME),
        options: {
          headerTitle: 'Home',
        },
      };
    case AppRoutes.USERS:
      return {
        name: formatRouteName(AppRoutes.USERS),
        options: {
          headerTitle: 'Users',
        },
      };
    case AppRoutes.USERS_BY_ID:
      return {
        name: formatRouteName(AppRoutes.USERS_BY_ID),
        options: {
          headerTitle: 'User page',
        }
      };
    case AppRoutes.NOT_FOUND:
      return {
        name: formatRouteName(AppRoutes.NOT_FOUND),
        options: {
          headerTitle: 'Not Found',
        },
      };
    case AppRoutes.TABS_EXEMPLE:
      return {
        name: formatRouteName(AppRoutes.TABS_EXEMPLE),
        options: {
          headerTitle: 'Tabs Example',
        },
      };
    default:
      // This exhaustive check ensures all enum values of AppRoutes are handled
      const exhaustiveCheck: never = routeName;
      console.warn(`Unhandled route: ${routeName}`)
      return { name: formatRouteName(AppRoutes.NOT_FOUND) };
  }
}