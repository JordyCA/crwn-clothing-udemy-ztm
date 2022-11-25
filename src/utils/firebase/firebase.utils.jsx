//** Libraries */
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCaoRA9UGBktR5YLL6RZTPSjLr7V4qEBw",
    authDomain: "ztm-crwn-clothing-db-9442f.firebaseapp.com",
    projectId: "ztm-crwn-clothing-db-9442f",
    storageBucket: "ztm-crwn-clothing-db-9442f.appspot.com",
    messagingSenderId: "266121380825",
    appId: "1:266121380825:web:4bae23a4b1f63b3c084fc8"
};


// Initialize Firebase

const firebaseApp  = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const singInWithGoogleredirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//** Save user in Firebase's databases */
export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
) => {
    if (!userAuth) return;
    
    //** Document model database- */
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc( 
                userDocRef, 
                {
                    displayName, 
                    email, 
                    createdAt,
                    ...additionalInformation
            });
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }

    return userDocRef;
    
}
 //** Create a User with email an password */
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return false;

    return await createUserWithEmailAndPassword(auth, email, password); 
}

//** Login a User*/
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return false;

    return await signInWithEmailAndPassword(auth, email, password); 
}

//**Sign Out a User */
export const signOutUser = async() => {
    return await signOut(auth);
}

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);