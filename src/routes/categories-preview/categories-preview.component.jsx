//** Libraries */
import {
    useContext,
    Fragment
} from 'react';

//** Components */
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';

//** Contexts */
import { CategoriesContext } from '../../contexts/categories.context.jsx';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    );
                })
            }
        </Fragment>
    );
}

export default CategoriesPreview;