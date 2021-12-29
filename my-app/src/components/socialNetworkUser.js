import PropTypes from "prop-types";
import { Container } from '../socialNetworkUser.styled';
// import { UserName } from '../socialNetworkUser.styled';

export default function SocialNetworkUser(props) {
    const { src, username, tag, location, followers, views, likes } = props;
    return (
<Container>
      <div className="description">
        <img
          src={src}
          alt="User avatar" 
          className="avatar"
          width="100"
        />
          <p>{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
      </div>
  
      <ul className="stats">
        <li>
          <span className="label">Followers: {followers}</span>
          <span className="quantity">1000</span>
        </li>
        <li>
          <span className="label">Views: {views}</span>
          <span className="quantity">2000</span>
        </li>
        <li>
          <span className="label">Likes: {likes}</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
  </Container>
    )};

    SocialNetworkUser.propTypes = {
      src: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    };