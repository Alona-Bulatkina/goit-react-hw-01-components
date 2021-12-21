import SocialNetworkUser from './components/socialNetworkUser';
import dataSocialUser from './dataSocialNetworkUser.json';

export default function App() {
  return (
  <div>
    <SocialNetworkUser 
      src={dataSocialUser.avatar} 
      username={dataSocialUser.username} 
      tag={dataSocialUser.tag} 
      location={dataSocialUser.location} 
      followers={dataSocialUser.stats.followers} 
      views={dataSocialUser.stats.views} 
      likes={dataSocialUser.stats.likes} />
  </div>
  )};
