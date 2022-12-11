import PropTypes from 'prop-types';
import { List, Status, Container } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id}>
            <Status eventType={isOnline}></Status>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </li>
        ))}
      </List>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
