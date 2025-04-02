import { AppRoutes } from "@/app/shared/core/routes/routes_names";
import { Link, router } from "expo-router";
import { Pressable, Text,View } from "react-native";
import { TodoPageProps } from "../../todo_list/presentation/todo_page";

const HomeTest = () => {
  return (
    <View>
      <Text>Home Test</Text>
      <Text>This is a test page.</Text>
      <Pressable
        onPress={() => {
          const todoProps : TodoPageProps = {
           id : '123',
          };
          router.push({
            pathname: AppRoutes.TODO_LIST,
            params: todoProps,
          });
        }}
      >
        <Text> Go to Todo page</Text>
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