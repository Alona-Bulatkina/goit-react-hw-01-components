import PropTypes from "prop-types";
import { Container, UserName, Image, Description, Stats, StatsLi, StatsQuantity } from '../socialNetworkUser.styled';


export default function SocialNetworkUser(props) {
    const { src, username, tag, location, followers, views, likes } = props;
    return (
<Container>
      <div>
        <Image
          src={src}
          alt="User avatar" 
          className="avatar"
          width="150"
        />
          <UserName>{username}</UserName>
          <Description>{tag}</Description>
          <Description>{location}</Description>
      </div>
  
      <Stats>
        <StatsLi>
          <span className="label">Followers: </span>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsLi>
        <StatsLi>
          <span className="label">Views: </span>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsLi>
        <StatsLi>
          <span className="label">Likes: </span>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsLi>
      </Stats>
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