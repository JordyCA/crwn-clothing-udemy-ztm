//** Libraries */
import {
    createContext,
    useState,
    useEffect
} from "react"

//**Utils */
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.jsx';
//import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.jsx';

//** Data */
// import SHOP_DATA from "./../shop-data.js";


export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap };

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            
            setCategoriesMap(categoryMap);

            console.log(categoryMap);
            
        }
        
        getCategoriesMap();

    },[]);


    // force manual add data to firebase
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // });

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}