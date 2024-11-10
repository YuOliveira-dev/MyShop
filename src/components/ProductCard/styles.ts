import styled from 'styled-components'

// Define os estilos de cada Card do produto
export const Card = styled.article`
    background-color: white;
    width: 100%;
    padding: 2rem;
    margin: 0 auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
// Define os estilos da imagem do produto
export const ProductImage = styled.img`
    width: 250px;
    height: 400px;

    object-fit: contain;

`;
// Define o estilo do titulo do produto
export const ProductTitle = styled.h2`
    font-weight: 500;
    font-size: 1.2rem;
    margin-top: 1rem;

    min-height: 3rem;
    

    
`;

// Define os estilos do container de produto
export const ReviwePriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`;

// Define os estilos do Review de cada produto
export const Review = styled.span`
    display: flex;
    align-items:center;
    gap: 2px;

    font-size: 0.8rem
`;
 // Define os estilos do preço do produto
export const Price = styled.strong``;

// Define os estilos do container que envolve o botão de carrinho
export const AddToCartButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`;
// Define os estilos do botão de adicionar ao carrinho
export const AddToCartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    background-color: blue;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    // Define o tamanho do icone de carrinho
    svg{
        font-size: 0.9rem;
    }`;
