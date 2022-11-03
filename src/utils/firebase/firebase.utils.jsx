//** Libraries */
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
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

const provider = new GoogleAuthProvider;

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    //** Document model database- */
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc( userDocRef, {displayName, email, createdAt} );
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }

    return userDocRef;
    
}