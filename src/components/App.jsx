import { Profile } from './Profile/Profile';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <GlobalStyle />
    </Layout>
  );
};
