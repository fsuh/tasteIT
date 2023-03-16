import { render, screen } from "@testing-library/react";
import Addnew from "../Addnew";

describe("Addnew", () => {
  test("rnders form with correct input fields", () => {
    render(<Addnew />);
    expect(screen.getByLabelText("Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Author:")).toBeInTheDocument();
    expect(screen.getByLabelText("Recipe is from:")).toBeInTheDocument();
    expect(screen.getByLabelText("Description:")).toBeInTheDocument();
    expect(screen.getByLabelText("image:")).toBeInTheDocument();
    expect(screen.getByLabelText("Ingredients:")).toBeInTheDocument();
    expect(screen.getByLabelText("Instructions:")).toBeInTheDocument();
  });
});
