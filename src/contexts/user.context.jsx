//** Libraries */
import {
    createContext,
    //useState,
    useEffect,
    useReducer
} from "react";

//** Utils */
import { onAuthStateChangeListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//** General values */
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

//** Functions */

const userReducer = (state, action) => {
    const {type, payload} = action;
    
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: payload
            }
        default: 
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

export const UserProvider = ({ children }) => {
    //const [currentUser, setCurrentUser] = useState(null);
    const [ {currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE );
    console.log('%cuser.context.jsx line:43 currentUser', 'color: #007acc;', currentUser);
    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    };

    const value = { currentUser, setCurrentUser };

    useEffect(
        () => {
            const unsubscribe = onAuthStateChangeListener((user) => {
                if (user) {
                    createUserDocumentFromAuth(user)
                }
                setCurrentUser(user);
                //console.log(user);
            });
            return unsubscribe;
        }, []
    );

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}