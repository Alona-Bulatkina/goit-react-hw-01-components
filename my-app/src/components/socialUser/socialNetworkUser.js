import PropTypes from "prop-types";
import { Container, UserName, Image, Description, Stats, StatsLi, StatsQuantity } from './socialNetworkUser.styled';


export default function SocialNetworkUser(props) {
    const { avatar, username, tag, location, stats } = props;
    return (
<Container>
      <div>
        <Image
          src={avatar}
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
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsLi>
        <StatsLi>
          <span className="label">Views: </span>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsLi>
        <StatsLi>
          <span className="label">Likes: </span>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsLi>
      </Stats>
  </Container>
    )};

    SocialNetworkUser.propTypes = {
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.object.isRequired,
    };