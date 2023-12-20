//** Types */
import { CATEGORY_ACTION_TYPE } from "./category.types";

export const CATEGORIES_INITIAL_SATE = {
    categories: []
}

//**Functions */
export const categoriesReducer = (
    state = CATEGORIES_INITIAL_SATE,
    action = {}
) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ACTION_TYPE.SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
            }
        default:
            return state;
    }
}