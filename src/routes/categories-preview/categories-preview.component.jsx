//** Libraries */
import {
    useContext,
    Fragment
} from 'react';
import { useSelector } from 'react-redux';
//** Components */
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';

//** Contexts */
// import { CategoriesContext } from '../../contexts/categories.context.jsx';

//** Redux */
import {selectCategoriesMap} from '../../store/categories/category.selector.jsx';

const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);    
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