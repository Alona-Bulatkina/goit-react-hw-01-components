import SocialNetworkUser from './components/socialNetworkUser';
import dataSocialUser from './user.json';
import FriendList from './components/FriendList';
import friendsData from './friends.json';

import StaticticsList from './components/StaticticsList';
import StatisticsSection from './components/StatisticsSection';
import data from './data.json';
import TransactionHistorySection from './components/TransactionHistorySection';
import TransactionHistoryList from './components/TransactionHistoryList';
import transactions from './transactions.json';


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
      likes={dataSocialUser.stats.likes} 
    />

    <FriendList items={friendsData} />

    <StatisticsSection title="Upload stats">
    <StaticticsList items={data} /> 
    </StatisticsSection>

    <TransactionHistorySection>
      <TransactionHistoryList items={transactions} />
    </TransactionHistorySection>

  </div>
  )};
