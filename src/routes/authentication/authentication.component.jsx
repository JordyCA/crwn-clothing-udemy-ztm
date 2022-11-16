//** Libraries */
// import { useEffect } from "react"; //** optional login with google or other providers  */
// import { getRedirectResult } from "firebase/auth";

//**Utils */
// import {
//     auth,
//     signInWithGooglePopup, 
//     singInWithGoogleredirect, //** optional login with google or other providers */
//     createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils.jsx";
// import { async } from "@firebase/util";

//**Components */
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

//** Styles */
import './authentication.style.scss';

const Authentication = () => {
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

    return (
        <div className="authentication-container">
            {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
            {/* <button onClick={singInWithGoogleredirect}>Sign in with Google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    );
}
export default Authentication;