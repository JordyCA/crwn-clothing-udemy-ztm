//** Types */
import { CATEGORY_ACTION_TYPE } from './category.types.jsx';

//** Utils */
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = ( categoriesArray ) =>
    createAction(CATEGORY_ACTION_TYPE.SET_CATEGORIES, categoriesArray);