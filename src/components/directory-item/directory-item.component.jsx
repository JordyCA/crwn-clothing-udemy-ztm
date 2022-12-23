//** Libraries */
import { useNavigate } from 'react-router-dom';

//** Styles */
import {BackgroundImage, Body, DirectoryContainer} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
    const { id, title, imageUrl, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    
    return (
        <DirectoryContainer key={id} onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl.toString()} />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryContainer>
    );

}

export default DirectoryItem;