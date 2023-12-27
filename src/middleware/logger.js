// curry function 
export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('%cstore.jsx line:19 Type', 'color: #007acc;', action.type);
    console.log('%cstore.jsx line:20 payload', 'color: #007acc;', action.payload);
    console.log('%cstore.jsx line:21 currentSate', 'color: #007acc;', store.getState());

    next(action);

    console.log('%cstore.jsx line:25 nextAction', 'color: #007acc;', store.getState());
} 