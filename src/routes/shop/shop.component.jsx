//** Libraries */
import { useContext } from 'react';

//** Components */
import ProductCard from './../../components/product-card/product-card.component.jsx';

//** Contexts */
import { ProductsContext } from '../../contexts/products.context.jsx';

//** Styles */
import './shop.styles.scss'

const Shop = () => {

    const { products } = useContext(ProductsContext);
    return (
        <div className='products-container'>{
            products.map(( product ) => (
                <ProductCard key={product.id} product={product}/>
            ))
        }</div>
    )
}

export default Shop;