import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';

function FriendList({ items }) {
    return (
    <ul>
        
            <li key={items.id}>
                <FriendListItem avatar={items.avatar} 
                name={items.name} 
                status={items.isOnline} />
            </li>
    
    </ul>

    )}

    FriendList.propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
        }))
    }
export default FriendList;