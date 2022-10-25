//** Components */
import CategoryItem from '../category-item/category-item.component.jsx';

//** Styles */
import './directory.styles.scss';

const Directory = ({ categories }) => {
    return (
        <div className="directories-container">
            {
                categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))
                // categories.map(({title, id, imageUrl }) => (
                //   <CategoryItem category={{title: title, id: id, imageUrl: imageUrl}} />
                // ))
            }
        </div>
    );
}

export default Directory;