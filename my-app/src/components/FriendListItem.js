import PropTypes from 'prop-types';
import friendsData from '../friends.json';

export default function FriendListItem({ isOnline, avatar, name }) {

return (
<ul> {
    friendsData.map(friend => (
    
      <li className="item">
        <span className="status">{friend.isOnline ? 'Онлайн' : 'Офлайн'}</span>
        <img className="avatar" src={friend.avatar} alt={friend.avatar} width="48" />
        <p className="name">{friend.name}</p>
      </li>
    
))}
</ul>
)};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
}

