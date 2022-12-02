import { List } from 'components/FriendList/FriendList.styled';
import { Container } from 'components/TransactionHistory/TransactionHistory.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <h2>{title}</h2>

      <List>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <span>{label} </span>
            <span>{percentage} %</span>
          </li>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
