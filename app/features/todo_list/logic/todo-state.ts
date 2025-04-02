import { Todo } from "../data_model/entities/todo";

export interface CounterState {
  value: number;
  todos: Todo[];
}

export const initialCounterState: CounterState = {
  value: 0,
  todos: []
};