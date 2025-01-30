import counterReducer, {
  increment,
  decrement,
  setCounter,
} from "./counterSlice";
import { describe, it, expect } from "vitest";

describe("counterSlice", () => {
  it("should return the initial state", () => {
    expect(counterReducer(undefined, { type: "" })).toEqual({
      value: 0,
    });
  });

  it("should increment the counter", () => {
    const initialState = { value: 0 };
    const newState = counterReducer(initialState, increment());
    expect(newState.value).toBe(1);
  });

  it("should decrement the counter", () => {
    const initialState = { value: 0 };
    const newState = counterReducer(initialState, decrement());
    expect(newState.value).toBe(-1);
  });

  it("should set the counter to a specific value", () => {
    const initialState = { value: 0 };
    const newState = counterReducer(initialState, setCounter(100));
    expect(newState.value).toBe(100);
  });
});
