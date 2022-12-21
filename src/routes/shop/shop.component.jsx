//** Libraries */
import {
    Routes,
    Route
} from 'react-router-dom';

//** Routes */
import CategoriesPreview from '../categories-preview/categories-preview.component.jsx';
import Category from '../category/category.component.jsx';

//** Styles */
import './shop.styles.scss'

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;