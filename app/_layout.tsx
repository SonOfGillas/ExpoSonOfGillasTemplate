import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { ScreenProps, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/app/shared/core/hooks/useColorScheme';
import { AppRoutes } from './shared/core/routes/routes_names';
import { getScreenProps } from './shared/core/routes/routes_props';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const theme = useMemo(() => {
    // return colorScheme === 'dark' ? DarkTheme : DefaultTheme;
    return DefaultTheme;
  }, [colorScheme]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={theme}>
      <Stack>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen {...getScreenProps(AppRoutes.NOT_FOUND)} />
        <Stack.Screen {...getScreenProps(AppRoutes.HOME)} />
        <Stack.Screen {...getScreenProps(AppRoutes.USERS)} />
        <Stack.Screen {...getScreenProps(AppRoutes.USERS_BY_ID)} />

        {/* <Stack.Screen name="users/presentation/[id]" options={
          {
            headerTitle: 'User page',
            headerStyle: {
              backgroundColor: theme.colors.card,
            }
          }
        }/>
        <Stack.Screen name="users/presentation/user_page" options={
          {
            headerTitle: 'User page no param',
            headerStyle: {
              backgroundColor: theme.colors.card,
            }
          }
        }/>
                */} 
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
