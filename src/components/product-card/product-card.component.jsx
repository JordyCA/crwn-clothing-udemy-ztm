//** Components */
import Button from '../button/button.component';

//** Styles */
import './product-card.style.scss';

const ProductCard = ({ product }) => {
    const {name, prices, imageUrl} = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{prices}</span>
            </div>
            <Button buttonType='inverted'>Add to card</Button>
        </div>
    );
}

export default ProductCard;