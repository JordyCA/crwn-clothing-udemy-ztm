import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType = null, ...otherProps }) => {
    return (
        <button className={`button-container ${ buttonType !== null && (BUTTON_TYPE_CLASSES[buttonType])}`} {...otherProps}>{children}</button>
    );
}

export default Button;