//** Libraries */
import {
    compose,
    legacy_createStore as createStore,
    applyMiddleware
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

// import logger from 'redux-logger';

//** reducers */
import { rootReducer } from './root-reducer';

const persistConfg = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfg, rootReducer);


const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const composerEnhancer = (process.env.NODE_ENV !== 'production'
    && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composerEnhancer(applyMiddleware(...middleWares));


export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);