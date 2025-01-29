import { RootState } from "../../store";

export function saveStateToLocalStorage(state: Partial<RootState>) {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem("appState", serializedState);
  } catch (error) {
    console.warn("Error saving state to localStorage:", error);
  }
}
