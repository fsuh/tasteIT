import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";

// test that the component renders without errors

test("renders SearchBar component", () => {
  render(<SearchBar />);
});

// test that the input field updates its value when the user types

test("updates input value when user types", () => {
  const mockOnChange = jest.fn();
  render(<SearchBar onChange={mockOnChange} />);

  const inputElement = screen.getByPlaceholderText("Search...");
  const inputValue = "test search value";
  fireEvent.change(inputElement, { target: { value: inputValue } });

  expect(mockOnChange).toHaveBeenCalledTimes(1);
  expect(inputElement.value).toBe(inputValue);
});
