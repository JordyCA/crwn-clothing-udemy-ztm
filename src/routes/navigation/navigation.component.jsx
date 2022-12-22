//** Libraries */
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';

//** Components */
import { ReactComponent as CrwnLogo } from './../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

//** Contexts */
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

//** Styles */
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from  './navigation.styles.jsx';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinksContainer>
                { isCartOpen && <CartDropdown/> }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;