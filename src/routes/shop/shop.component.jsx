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
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.jsx';
import { setCategoriesMap } from '../../store/categories/category.action.jsx';

//** Redux */


//** Styles */
import './shop.styles.scss'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            
            dispatch(setCategoriesMap(categoryMap));

            console.log(categoryMap);
            
        }
        
        getCategoriesMap();

    },[dispatch]);


    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;