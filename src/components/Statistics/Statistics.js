import PropTypes from 'prop-types';
import { Container, List } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {{ title } && <h2>Upload stats</h2>}
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
