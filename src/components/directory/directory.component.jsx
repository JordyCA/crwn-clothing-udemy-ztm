//** Components */
import DirectoryItem from '../directory-item/directory-item.component.jsx';

//** Styles */
import './directory.styles.scss';

const Directory = ({ categories }) => {
    return (
        <div className="directories-container">
            {
                categories.map((category) => (
                    <DirectoryItem key={category.id} category={category} />
                ))
                // categories.map(({title, id, imageUrl }) => (
                //   <CategoryItem category={{title: title, id: id, imageUrl: imageUrl}} />
                // ))
            }
        </div>
    );
}

export default Directory;