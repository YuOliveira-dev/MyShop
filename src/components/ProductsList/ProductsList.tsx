import { ProductCard } from '../ProductCard/ProducCard'
import { products } from '../../data/products'

import * as S from './Styles'

export const ProductsList: React.FC = () => {
    return (
        <S.Container>
            { products.map((product)=> (

            <ProductCard key={product.id} product={product} />
            ))}
            
        </S.Container>
    )

}