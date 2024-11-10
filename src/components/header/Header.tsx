import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";

export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false)
  const isLogged = false;

  return (
    <S.StyledHeader>
      <S.Wrapper>
        {/* Titulo no Header */}
        <S.HeaderTitle>MyShop</S.HeaderTitle>

        <S.buttonsWrapper>
          <S.AythButton isLogged={isLogged}>
            {/* Caso o usuário esteja logado, exibe "Logout", do contrário, login com seus estilos respectivos */}
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogIn /> : <FiLogOut />}
          </S.AythButton>
          {/* Pega o evento de click no carrinho e do contrário de pressionado, mostra ou esconde. */}
          <S.CartButton onClick={()=> setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.buttonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
