import { Profile } from './Profile/Profile';
import { user } from './Profile/user';

export const App = () => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <Profile
      avatar={avatar}
      username={username}
      tag={tag}
      location={location}
      stats={stats}
    />
  );
};
