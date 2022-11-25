//** Libraries */
import { useState } from "react";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";


//** Components */
import FormInput from "./../form-input/form-input.component.jsx";
import Button from "../button/button.component";


//** Styles */
import './sign-in-form.style.scss';

//** Default values */
const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        //console.log(user);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const signInWithPasssword = async () => {
            try {
                const { user } = await signInAuthUserWithEmailAndPassword(email, password);

                resetFormFields();
            } catch (error) {
                console.log(error);
                switch (error.code) {
                    case 'auth/wrong-password':
                        alert('Incorrect password for email.');
                        break;
                    case 'auth/user-not-found':
                        alert('No user associated with this email');
                        break;

                    default:
                        break;
                }
            }
        }

        signInWithPasssword();
    }

    const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required />

                <FormInput label="Password" type="password" onChange={handleChange} name="password" minLength={6} maxLength={10} value={password} required />

                <div className="buttons-container">
                    <Button type="submit" children={'Sign up'} />
                    <Button type="button" buttonType="google" children={'Google sign in'} onClick={signInGoogle} />
                </div>

            </form>
        </div>
    );
}

export default SignInForm;