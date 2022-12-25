import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

describe("<App />", () => {
  test("display counter text", () => {
    render(<App />);

    expect(screen.getByTestId("counter")).toHaveTextContent("0");
  });

  test("increment counter", () => {
    render(<App />);

    const btnIncrement = screen.getByTestId("inc");
    fireEvent.click(btnIncrement);

    expect(screen.getByTestId("counter")).toHaveTextContent("1");
  });

  test("decrement counter", () => {
    render(<App />);

    const btnDecrement = screen.getByTestId("dec");
    fireEvent.click(btnDecrement);
    fireEvent.click(btnDecrement);

    expect(screen.getByTestId("counter")).toHaveTextContent("0");
  });
});
