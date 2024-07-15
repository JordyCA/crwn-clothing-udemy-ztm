//** Types */
import { CATEGORY_ACTION_TYPE } from "./category.types";

export const CATEGORIES_INITIAL_SATE = {
    categories: [],
    isLoading: false,
    error: null,
}

//**Functions */
export const categoriesReducer = (
    state = CATEGORIES_INITIAL_SATE,
    action = {}
) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_START:
            return {...state, isLoading: true}
        case CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload, isLoading: false
            }
        case CATEGORY_ACTION_TYPE.FETCH_CATEGORIES_FAILED: 
            return {
                ...state, error: payload, isLoading: false
            }
        default:
            return state;
    }
}