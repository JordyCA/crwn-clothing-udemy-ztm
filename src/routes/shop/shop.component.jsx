//** Libraries */
import { useEffect } from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
//** Routes */
import CategoriesPreview from '../categories-preview/categories-preview.component.jsx';
import Category from '../category/category.component.jsx';

//** Utils */
import { fetchCategoriesStart } from '../../store/categories/category.action.jsx';


//** Styles */
import './shop.styles.scss'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());

    },[]);


    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;