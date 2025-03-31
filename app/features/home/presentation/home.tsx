import { AppRoutes } from "@/app/shared/core/routes/routes_names";
import { Link, router } from "expo-router";
import { Pressable, Text,View } from "react-native";

const HomeTest = () => {
  return (
    <View>
      <Text>Home Test</Text>
      <Text>This is a test page.</Text>
      <Pressable
        onPress={() => {
          router.push({
            pathname: AppRoutes.USERS_BY_ID,
            params: { id: "John Doe" },
          });
        }}
      >
        <Text> Go to user John Doe</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push(AppRoutes.USERS);
        }}
      >
        <Text> Go to user no param</Text>
      </Pressable>
    </View>
  );
}
export default HomeTest;