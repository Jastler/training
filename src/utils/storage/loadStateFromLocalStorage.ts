import { RootState } from "../../store";

export function loadStateFromLocalStorage(): Partial<RootState> {
  try {
    const serializedState = window.localStorage.getItem("appState");
    return serializedState ? JSON.parse(serializedState) : {};
  } catch (error) {
    console.warn("Error loading state from localStorage:", error);
    return {};
  }
}
