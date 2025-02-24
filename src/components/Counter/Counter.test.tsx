import { render } from "@testing-library/react";
import { Counter } from "./Counter";

describe("It should render Counter component correctly", () => {
  test("renders without crashing", () => {
    render(<Counter />);
  });
});
