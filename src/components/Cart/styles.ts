import styled from "styled-components";

// Criando uma interface para mostrar ou esconder o carrinho
interface ContainerProps {
  showCart: boolean;
}
// Utiliza as propriedades criadas anteriormente para adicionar dinamismo ao componente, no caso mostrar ou esconder o elemento.
export const Container = styled.aside<ContainerProps>`

  position: fixed;
  top: 0;
  /* Abaixo utilizando a lógica ( Se showCart é false, ao clicar no botão, mostre o elemento, do contrário, esconda ) */
  right: ${(props) => props.showCart ? '0px' : '-350px'};

  width: 300px;
  height: 100vh;
  background-color: white;
  z-index: 1000;

  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: right 0.5s;
`;

export const Title = styled.h1``;

export const CartProductList = styled.ul`
  padding: 2rem 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItem = styled.li `

`;


export const CartTotal = styled.strong `

`