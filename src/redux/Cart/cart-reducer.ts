import { Product } from "../../data/products";

interface CartState {
    cart: Product[];

}

const initialState: CartState = {
 cart: [],
};

interface CartAction {
    type: string;
    payload: Product
}

export function cartReducer(state = initialState, action: CartAction) {
    switch(action.type) { // switch para lidar com reducer de forma mais simples
    case 'cart/add-product': // pega a ação de adicionar itens no carrinho
        return {
            ...state, //retorna o estado da aplicação atualizado e mantém tudo oque estava anteriormente
            cart: [ // pega o array que contém os itens no carrinho
                ...state.cart,
                action.payload, // Pega os itens selecionados e coloca dentro do array
            ]
        };
    case 'cart/remove-product':
        const productToRemove = action.payload;
        const cartFiltered = state.cart.filter(product => product.id !== productToRemove.id) // Se o id do produto no carrinho for diferente do id do produto a ser removido, ele é adicionado no novo array de produtos no carrinho.

        return {
            ...state, // trás o estado atualizado
            cart: cartFiltered, // Trás o novo array filtrado e somente com os itens restantes no carrinho
        };
        default:
            return state;
    }
    return state;
}


