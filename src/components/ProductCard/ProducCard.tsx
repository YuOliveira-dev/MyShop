import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as S from "./styles";
import { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <S.Card>
      {/* Adicionando dinamismo através da tabela de produtos */}
      <S.ProductImage src={product.image} alt={product.description} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      {/* Envolve o preço e review em um container */}
      <S.ReviwePriceContainer>
        <S.Review>
          {/* Se avaliação for menor do que o número inteiro, arredonda pra cima ou pra baixo dependendo do valor e adiciona ou remove uma estrela, a avaliação é até 5 estrelas*/}
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index}/>
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          {product.rating.rate}
        </S.Review>
        <S.Price>{product.price}</S.Price>
      </S.ReviwePriceContainer>
      {/* Container para envolver o botão */}
      <S.AddToCartButtonWrapper>
        {/* Botão para adicionar ao carrinho */}
        <S.AddToCartButton>
          Adicionar ao carrinho
          <FiShoppingCart />
        </S.AddToCartButton>
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};
