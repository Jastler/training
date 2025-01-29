import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../features/todo/types";

import {
  addTodoToFirestore,
  deleteTodoFromFirestore,
  fetchTodosFromFirestore,
  updateTodoInFirestore,
} from "../services/todoService";

type TodosState = {
  todos: Todo[];
  loading: boolean;
  error: string | null;
};

const initialState: TodosState = { todos: [], loading: false, error: null };

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const todos = await fetchTodosFromFirestore();
      return todos;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo: { title: string; checked?: boolean }, { rejectWithValue }) => {
    try {
      const id = await addTodoToFirestore({
        title: todo.title,
        checked: todo.checked ?? false, // Якщо `checked` відсутній, робимо `false`
      });
      return { id, ...todo } as Todo;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (todo: Todo, { rejectWithValue }) => {
    try {
      await updateTodoInFirestore(todo.id, todo);
      return todo;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string) => {
    await deleteTodoFromFirestore(id);
    return id;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    logoutTodos: (state) => {
      state.todos = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          Object.assign(state.todos[index], action.payload);
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((t) => t.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { logoutTodos } = todosSlice.actions;

export default todosSlice.reducer;
