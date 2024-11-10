import styled from "styled-components"


export const StyledHeader = styled.header`
    background-color: navy;


    
`;
// Define os estilos do container que envolve o Header
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width:1240px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 60px;
`;

// Define os estilos do Titulo ( Ou logo )
export const HeaderTitle = styled.h1`
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
`;

// Define os estilos do container que envolve os botões de login e carrinho
export const buttonsWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;
// Define uma interface para o botão de login (Logado ou deslogado)
interface AuthButtonProps {
    isLogged: boolean;
}
// Utiliza as propriedades criadas para adicionar dinâmismo no botão (No caso se estiver logado, fica vermelho, se estiver deslogado, fica verde)
export const AythButton = styled.button<AuthButtonProps>`
    border: none;
    border-radius: 5px;
    height: 32px;
    padding: 0 10px;
    /* Abaixo utilizando as proprs para mudar a cor do elemento (Caso logado verde, caso deslogado, vermelho) */
    background-color: ${(props) => props.isLogged ? "red" : "green"};
    color: white;
    font-size: 0.75rem;


    display: flex;
    align-items: center;
    gap: 0.2rem;

    svg{
        font-size: 0.9rem;
    }

`;

// Adicionando estilos no botão de Carrinho
export const CartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 32px;
    padding: 0 10px;
    background-color: violet;
    color: black;

    display: flex;
    align-items: center;
    gap: 0.2rem;

    svg{
        font-size: 0.9rem;
    }

`;