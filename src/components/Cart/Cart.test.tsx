import { render } from "@testing-library/react";
import { Cart } from "./Cart";
import { products } from "../../data/products";
import { screen } from "@testing-library/react"

import '@testing-library/jest-dom';

const cart = products.slice(0, 2);

const mockDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    }
  }
}); // Chama a biblioteca pra simular o comportamento do componente
describe("Cart > Unit Tests", () => {
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getByTestId("total");
    const cartListElement = screen.getByRole("list");

    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement).toHaveTextContent("$0");
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it("should render a cart with two products", () => {
    render(<Cart showCart={true} cart={cart} />);

    const productsItemElement = screen.getAllByRole("listitem");
    

    expect(productsItemElement.length).toBe(2);
    


  });
});
