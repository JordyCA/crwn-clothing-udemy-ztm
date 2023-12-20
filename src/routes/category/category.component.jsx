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

//** Contexts */
// import { CategoriesContext } from '../../contexts/categories.context.jsx';

//** Redux */
import {selectCategoriesMap} from '../../store/categories/category.selector.jsx';

//** Style */
import './category.style.scss';

const Category = () => {
    const { category } = useParams();
    console.log('--> render/re-rendering category component');
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);


    useEffect(() => {
        console.log('efect fired calling setProducts')
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category?.toLocaleUpperCase()}</h2>
            <div className='category-container'>
                {
                    products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </Fragment>
    )

}

export default Category;