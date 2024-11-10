import { ProductCard } from '../ProductCard/ProducCard'
import { products } from '../../data/products'

import * as S from './Styles'

// Componente da lista de produtos gerados dinâmicamente utilizando um "banco de dados" para unificar cada produto, os itens são importados da pasta Data e gerados dinâmicamente em cada componente separadamente.
export const ProductsList: React.FC = () => {
    return (
        <S.Container>
            {/* Utilizando um Map, eu percorro cada item através do ID e utilizando as propriedades é levada todas as informações dinâmicamente em cada card disponivel na tela, que no caso são 20 itens de acordo com*/}
            { products.map((product)=> (

            <ProductCard key={product.id} product={product} />
            ))}
            
        </S.Container>
    )

}