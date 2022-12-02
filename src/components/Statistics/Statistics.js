import { Container } from 'components/TransactionHistory/TransactionHistory.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <h2>{title}</h2>

      <ul>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <span>{label} </span>
            <span>{percentage} %</span>
          </li>
        ))}
      </ul>
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
