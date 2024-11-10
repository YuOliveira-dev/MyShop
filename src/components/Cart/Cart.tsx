import * as S from "./styles";

// Cria uma interface para as propriedades do carrinho ( true or false / Mostra ou esconde)
interface CartProps {
  showCart: boolean;
}

// Componente de um carrinho onde os itens adicionados vão ser armazenados, utilizando as propriedades da interface criada anteriormente.
export const Cart: React.FC<CartProps> = ({ showCart }) => {
  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
    </S.Container>
  );
};
