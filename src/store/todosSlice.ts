import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../features/TodoApp/types";
import { loadStateFromLocalStorage } from "../utils/loadStateFromLocalStorage";

type TodosState = Todo[];

const initialState: TodosState = loadStateFromLocalStorage().todos || [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index] = action.payload;
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state[index].checked = !state[index].checked;
    },
    deleteTodos: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodos, updateTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
