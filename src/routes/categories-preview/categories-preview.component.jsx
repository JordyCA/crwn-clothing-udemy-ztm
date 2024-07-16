//** Libraries */
import {
    useContext,
    Fragment
} from 'react';
import { useSelector } from 'react-redux';
//** Components */
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';
import Spinner from '../../components/spinner/spinner.component.jsx';

//** Contexts */
// import { CategoriesContext } from '../../contexts/categories.context.jsx';

//** Redux */
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector.jsx';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        <Fragment>
            {
                isLoading ? <Spinner /> :
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