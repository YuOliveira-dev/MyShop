import { Product } from "../../data/products";
import * as S from "./styles";
// Cria uma interface para as propriedades do carrinho ( true or false / Mostra ou esconde)
interface CartProps {
  showCart: boolean;
  cart: Product[];
}

// Componente de um carrinho onde os itens adicionados vão ser armazenados, utilizando as propriedades da interface criada anteriormente.
export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      {/* Um componente que envolve a lista de produtos que estão no carrinho, usando o map pra percorrer toda a lista e retornar os produtos com o id sendo passado como Key */}
      <S.CartProductList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            {product.title} - ${product.price}
          </S.CartProductItem>
        ))}
      </S.CartProductList>

      <S.CartTotal data-testid="total">Total: ${total}</S.CartTotal>
    </S.Container>
  );
};
