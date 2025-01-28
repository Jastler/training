import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";
import authReducer from "./authSlice";
import { saveStateToLocalStorage } from "../utils/saveStateToLocalStorage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    auth: authReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveStateToLocalStorage({
    todos: state.todos,
    counter: state.counter,
  });
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
