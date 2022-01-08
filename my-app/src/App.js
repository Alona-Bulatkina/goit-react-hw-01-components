import SocialNetworkUser from './components/socialUser/socialNetworkUser';
import dataSocialUser from './data/user.json';
import FriendList from './components/friends/FriendList';
import friendsData from './data/friends.json';
import StaticticsList from './components/statictics/StaticticsList';
import StatisticsSection from './components/statictics/StatisticsSection';
import data from './data/data.json';
import TransactionHistory from './components/transaction/TransactionHistory';
import transactions from './data/transactions.json';


export default function App() {
  return (
  <div>

    <SocialNetworkUser 
      avatar={dataSocialUser.avatar} 
      username={dataSocialUser.username} 
      tag={dataSocialUser.tag} 
      location={dataSocialUser.location} 
      stats={dataSocialUser.stats} 
    />

    <FriendList items={friendsData} />

    <StatisticsSection title="Upload stats">
    <StaticticsList items={data} /> 
    </StatisticsSection>

    <TransactionHistory items={transactions} />
  </div>
  )};
