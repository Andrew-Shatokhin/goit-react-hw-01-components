import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
