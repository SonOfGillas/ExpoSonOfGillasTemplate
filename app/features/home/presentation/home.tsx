import { AppRoutes } from "@/app/shared/core/routes/routes_names";
import { Link, router } from "expo-router";
import { Pressable, Text,View } from "react-native";
import { UserPageProps } from "../../users/presentation/user_page";

const HomeTest = () => {
  return (
    <View>
      <Text>Home Test</Text>
      <Text>This is a test page.</Text>
      <Pressable
        onPress={() => {
          const userProps : UserPageProps = {
            id: '123',
          };
          router.push({
            pathname: AppRoutes.USERS,
            params: userProps,
          });
        }}
      >
        <Text> Go to user with params</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push(AppRoutes.TABS_EXEMPLE);
        }}
      >
        <Text> Tabs Exemple</Text>
      </Pressable>
    </View>
  );
}
export default HomeTest;