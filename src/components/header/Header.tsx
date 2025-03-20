import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";

import * as S from "./styles";
import { login, logout } from "../../redux/User/use-slice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );
  const { cart } = useSelector((rootReducer: RootReducer)=> rootReducer.cartReducer );
  
  const dispatch = useDispatch();

  // Adiciona o estado do carrinho e uma constante para alterar se o carrinho aparece ou some.
  const [showCart, setShowCart] = useState(false);
  // constante para guardar o valor se o usuário está logado ou não
  const isLogged = user !== null;

  // Função para pegar o evento de clique do usuário
  function handleUserAuth(e: React.MouseEvent<HTMLButtonElement>) {
    if (user === null) {
      //despachar a action de login
      dispatch(
        login({
          name: "Yuri Carvalho",
          email: "carvalhoyc@hotmail.com",
        })
      );
    } else {
      dispatch(logout());
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop</S.HeaderTitle> {/* Titulo no Header */}
        <S.buttonsWrapper>
          <S.AythButton isLogged={isLogged} onClick={handleUserAuth}>
            {/* Caso o usuário esteja logado, exibe "Logout", do contrário, login com seus estilos respectivos */}
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogIn /> : <FiLogOut />}
          </S.AythButton>
          {/* Pega o evento de click no carrinho e do contrário de pressionado, mostra ou esconde. */}
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart /> {/* Icone de carrinho*/}
          </S.CartButton>
        </S.buttonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} cart={cart} />
    </S.StyledHeader>
  );
};
