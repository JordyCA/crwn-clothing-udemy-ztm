//** Libraries */
import { useContext } from 'react';

//** Components */
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';
import ProductCard from './../../components/product-card/product-card.component.jsx';

//** Contexts */
import { CategoriesContext } from '../../contexts/categories.context.jsx';

//** Styles */
import './shop.styles.scss'

const Shop = () => {

    const { categoriesMap } = useContext(CategoriesContext);
    console.log(categoriesMap);
    return (
        <div className='shop-container'>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    );
                })
            }
        </div>
    );
}

export default Shop;