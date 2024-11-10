import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";


export const Header: React.FC = () => {
  // Adiciona o estado do carrinho e uma constante para alterar se o carrinho aparece ou some.
  const [showCart, setShowCart] = useState(false)
  // constante para guardar o valor se o usuário está logado ou não
  const isLogged = false;

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop</S.HeaderTitle> {/* Titulo no Header */}

        <S.buttonsWrapper>
          <S.AythButton isLogged={isLogged}>
            {/* Caso o usuário esteja logado, exibe "Logout", do contrário, login com seus estilos respectivos */}
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogIn /> : <FiLogOut />}
          </S.AythButton>
          {/* Pega o evento de click no carrinho e do contrário de pressionado, mostra ou esconde. */}
          <S.CartButton onClick={()=> setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart /> {/* Icone de carrinho*/}
          </S.CartButton>
        </S.buttonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
