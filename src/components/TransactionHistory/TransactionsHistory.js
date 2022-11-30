import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';

export const TransactionsHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr>
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
