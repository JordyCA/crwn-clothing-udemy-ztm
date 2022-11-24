//** Libraries */
import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

//** Components */
import FormInput from "./../form-input/form-input.component.jsx";
import Button from "../button/button.component";

//** Contexts */
import { UserContext } from "../../contexts/user.context";

//** Styles */
import './sign-up-form.style.scss';

//** Default values */
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    //const val = useContext(UserContext);

    const { setCurrentUser } = useContext(UserContext);
    
    // console.log(val);
    // console.log('hit');
    

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const submit = async () => {
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            try {
                const { user } = await createAuthUserWithEmailAndPassword(email, password);
                
                setCurrentUser(user);
                
                await createUserDocumentFromAuth(user, { displayName });
                resetFormFields();
            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    alert("Can't create a user's account, email already in use.")
                } else {
                    alert("The account doesn't save.")
                }

            }
        }
        submit();
    }

    const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" onChange={handleChange} name="displayName" value={displayName} required />

                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required />

                <FormInput label="Password" type="password" onChange={handleChange} name="password" minLength={6} maxLength={10} value={password} required />
                
                <FormInput label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" minLength={6} maxLength={10} value={confirmPassword} required />

                <Button children={'Sign up'}  type="submit" />
            </form>
        </div>
    );
}

export default SignUpForm;