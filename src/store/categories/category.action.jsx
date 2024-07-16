// import { disp } from 'react';

//** Types */
import { CATEGORY_ACTION_TYPE } from './category.types.jsx';

//** Utils */
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.jsx';

export const fetchCategoriesStart = () => 
    createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_START);


export const fetchCategoriesSuccess = ( categoriesArray ) => 
createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray, );

export const fetchCategoriesFailed = ( error ) => 
    createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync =  () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
        
    }

    // dispatch(setCategories(categoriesArray));
}