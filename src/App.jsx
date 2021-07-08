import './App.css';
import SocialProfile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statistical from './data/statistical-data.json';
import transactions from './data/transactions.json';
import friends from './data/friends.json';

export default function App() {
  return (
    <div className="App">
      <SocialProfile
        test="hjkhhj"
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload Stats" stats={statistical} />
      <Statistics stats={statistical} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
}
