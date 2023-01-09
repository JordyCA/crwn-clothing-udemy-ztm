//** Libraries */
import {
    compose, 
    legacy_createStore as createStore,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';

//** reducers */
import { rootReducer } from './root-reducer';

const middleWares =  [logger];

console.log(middleWares);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, composedEnhancers);