import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { initialCounterState } from './todo-state'
import { Todo } from '../data_model/entities/todo'
import { incrementAsync } from './todo-asyncthunk'

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialCounterState,
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    },
    todoAdded(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload)
    }
  },
  extraReducers(builder) {
    // InscrementAsync
    builder.addCase(
      incrementAsync.pending,
      () => {
        console.log('incrementAsync pending')
      }
    )
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload
        }
      )
  },
})

export const { incremented, decremented } = todoSlice.actions
export const todoReducer = todoSlice.reducer