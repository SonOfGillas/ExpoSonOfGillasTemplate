import { AppDispatch, RootState } from "@/app/shared/core/state/store";
import { View, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "../logic/todo-slice";
import { useLocalSearchParams } from "expo-router";


export type TodoPageProps = {
  id: string;
}


const TodoPage = () => {
    const params = useLocalSearchParams<TodoPageProps>();
    const { id } = params;

  const count = useSelector((state: RootState) => state.todo.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View>
    <Text>Todo Page </Text>
      <Text>Id: { id }</Text>
      <Text> Count: { count } </Text>
      <Pressable
        onPress={() => {
          dispatch(incremented());
        }}
      >
        <Text> increment</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          dispatch(decremented());
        }}
      >
        <Text> decremented</Text>
      </Pressable>
    </View>
  );
}

export default TodoPage;