import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@store";
import Counter from "@features/counter";
import { describe, it, expect, vi } from "vitest";

describe("Counter Component", () => {
  it("renders correctly with initial value", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(screen.getByText(/Counter:/)).toBeInTheDocument();
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });

  it("increments the counter when increment button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByText(/Counter: 2/)).toBeInTheDocument();
  });

  it("decrements the counter when decrement button is clicked", async () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText("Decrement"));

    expect(screen.getByText(/Counter: 1/)).toBeInTheDocument();
  });

  it("sets the counter to a specific value", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    vi.spyOn(window, "prompt").mockReturnValue("42");

    fireEvent.click(screen.getByText("Set value"));
    expect(screen.getByText(/Counter: 42/)).toBeInTheDocument();
  });
});
