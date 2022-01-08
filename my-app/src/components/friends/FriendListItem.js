import PropTypes from 'prop-types';
import friendsData from '../../data/friends.json';
import { Item, Status, Avatar, Name } from '../friends/FriendListItem.styled';

export default function FriendListItem({ isOnline, avatar, name }) {

return (
<ul> {
    friendsData.map(friend => (
    
      <Item key={friend.id}>
        <Status eventType={friend.isOnline}>{friend.isOnline}</Status>
        <Avatar src={friend.avatar} alt={friend.avatar} width="60" />
        <Name>{friend.name}</Name>
      </Item>
    
))}
</ul>
)};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
}

