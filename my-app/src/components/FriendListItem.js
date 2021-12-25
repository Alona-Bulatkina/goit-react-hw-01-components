import PropTypes from 'prop-types';
import friendsData from '../friends.json';

export default function FriendListItem({ isOnline, avatar, name }) {

return <ul class="friend-list">
  {
  friendsData.map(friend => 
<li class="item">
  <span class="status">{isOnline ? 'Онлайн' : 'Офлайн'}</span>
  <img class="avatar" src={avatar} alt={avatar} width="48" />
  <p class="name">{name}</p>
</li>
)};
</ul>
};



FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
}