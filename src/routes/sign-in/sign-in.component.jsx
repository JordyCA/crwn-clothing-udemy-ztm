//** Libraries */
// import { useEffect } from "react"; //** optional login with google or other providers  */
// import { getRedirectResult } from "firebase/auth";

//**Utils */
import {
    auth,
    signInWithGooglePopup, 
    // singInWithGoogleredirect, //** optional login with google or other providers */
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.jsx";
import { async } from "@firebase/util";

//**Components */
import SignUpForm from "../../components/sign-up-form/sing-up-form.component.jsx";

const SignIn =  () => {
     //** optional login with google or other providers */
    // useEffect(() => {
    //     const getGoogleResponse = async () => {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getGoogleResponse();
    // });

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        //console.log(user);
    }

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            {/* <button onClick={singInWithGoogleredirect}>Sign in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    );
}
export default SignIn;