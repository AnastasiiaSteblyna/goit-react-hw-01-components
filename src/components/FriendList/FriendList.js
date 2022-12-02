import { Container } from 'components/TransactionHistory/TransactionHistory.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Container>
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <span>{isOnline}</span>
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </li>
      ))}
    </ul>
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
