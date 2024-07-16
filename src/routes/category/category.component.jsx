//** Libraries */
import {
    useContext,
    useEffect,
    useState,
    Fragment
} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//** Component */;
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component.jsx';

//** Contexts */
// import { CategoriesContext } from '../../contexts/categories.context.jsx';

//** Redux */
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector.jsx';

//** Style */
// import './category.style.scss';
import { CategoryContainer, Title } from './category.styles.jsx';

const Category = () => {
    const { category } = useParams();
    console.log('--> render/re-rendering category component');
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);


    useEffect(() => {
        console.log('efect fired calling setProducts')
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category?.toLocaleUpperCase()}</Title>
            {
                isLoading ? <Spinner /> :
                    (
                        <CategoryContainer>
                            {
                                products && products.map((product) =>
                                    (<ProductCard key={product.id} product={product} />))
                            }
                        </CategoryContainer>
                    )}

        </Fragment>
    )

}

export default Category;