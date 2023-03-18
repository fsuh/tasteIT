import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Addnew from "../Addnew";
import "@testing-library/jest-dom";

describe("<Addnew>", () => {
  // test rendering  of the form labels
  test("renders form with correct input fields", async () => {
    render(<Addnew />);
    await waitFor(() => {
      expect(screen.getByLabelText("Name:")).toBeInTheDocument();
      expect(screen.getByLabelText("Author:")).toBeInTheDocument();
      expect(screen.getByLabelText("Recipe origin:")).toBeInTheDocument();
      expect(screen.getByLabelText("Description:")).toBeInTheDocument();
      expect(screen.getByLabelText("image:")).toBeInTheDocument();
      expect(screen.getByText("Ingredients:")).toBeInTheDocument();
      expect(screen.getByLabelText("Instructions:")).toBeInTheDocument();
      expect(screen.getByText("Post recipe")).toBeInTheDocument();
    });
  });

  // test the add ingredient button for functionality

  it("adds a new ingredient field when 'add more' button is clicked", async () => {
    render(<Addnew />);
    await screen.findByRole("button", { name: /add more/i });
    const addMoreBtn = screen.getByRole("button", { name: /add more/i });
    fireEvent.click(addMoreBtn);
    await waitFor(() => screen.getAllByLabelText("Item:").length === 2);
    expect(screen.getAllByLabelText("Item:")).toHaveLength(2);
    expect(screen.getAllByLabelText("Quantity:")).toHaveLength(2);
  });
});
