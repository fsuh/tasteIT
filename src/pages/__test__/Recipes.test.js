import { render } from "@testing-library/react";
import Recipies from "../Recipies";

describe("Recipes", () => {
  test("renders correctly", () => {
    const { container } = render(<Recipies />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("matches snapshot", () => {
    const { asFragment } = render(<Recipies />);
    expect(asFragment()).toMatchSnapshot();
  });
});
