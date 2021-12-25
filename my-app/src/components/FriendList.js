import FriendListItem from "./FriendListItem";

function FriendList({ items }) {
    return (
    <ul>
        {items.map(item => (
            <li key={item.name}>
                <FriendListItem avatar={item.avatar} 
                name={item.name} 
                status={item.isOnline} />
            </li>
        ))}
    </ul>
    );
}

export default FriendList;