import PropTypes from 'prop-types';
import friendsData from '../friends.json';

export default function FriendListItem({ isOnline, avatar, name }) {

return <ul class="friend-list">
  {
  friendsData.map(friend => 
<li class="item">
  <span class="status">{friend.isOnline ? 'Онлайн' : 'Офлайн'}</span>
  <img class="avatar" src={friend.avatar} alt={friend.avatar} width="48" />
  <p class="name">{friend.name}</p>
</li>
)}
</ul>
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

