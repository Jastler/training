import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@store";
import Counter from "@features/counter";
import { describe, it, expect, vi, beforeEach } from "vitest";

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

  beforeEach(() => {
    const existingModalRoot = document.getElementById("modal-root");
    if (existingModalRoot) {
      existingModalRoot.remove();
    }
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  });

  // it("sets the counter to a specific value via modal", async () => {
  //   render(
  //     <Provider store={store}>
  //       <Counter />
  //     </Provider>
  //   );

  //   // Открываем модалку

  //   // Проверяем, что modal-root существует
  //   await waitFor(() => {
  //     expect(document.getElementById("modal-root")).toBeInTheDocument();
  //   });

  //   fireEvent.click(screen.getByTestId("set-value"));

  //   // Проверяем, что модалка внутри modal-root
  //   await waitFor(() => {
  //     expect(screen.getByRole("counterModal")).toBeInTheDocument();
  //   });

  //   // Ищем input внутри модалки
  //   const inputElement = await screen.findByRole("textbox");
  //   expect(inputElement).toBeInTheDocument();

  //   // Меняем значение
  //   fireEvent.change(inputElement, { target: { value: "42" } });

  //   // Подтверждаем установку значения
  //   fireEvent.click(screen.getByText("Confirm"));

  //   // Проверяем, что счетчик обновился
  //   await waitFor(() => {
  //     expect(screen.getByText(/Counter: 42/)).toBeInTheDocument();
  //   });
  // });
});
