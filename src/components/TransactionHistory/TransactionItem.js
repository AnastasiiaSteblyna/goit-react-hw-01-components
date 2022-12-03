import PropTypes from 'prop-types';
import { Row } from './TransactionHistory.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <Row>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Row>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
