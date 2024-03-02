import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { user } from './Profile/user';
import { Statistic } from './Statistic/Statistic';
import { data } from './Statistic/data';
import { friendsData } from './FriendList/friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <>
      <Profile
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
        stats={stats}
      />
      <Statistic title="Downloads" statData={data} />
      <FriendList data={friendsData} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
