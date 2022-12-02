import PropTypes from 'prop-types';
import { ItemColor } from './TransactionHistory.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <ItemColor>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </ItemColor>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
