import PropTypes from "prop-types";
import { Table, Strings } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
  
      <Strings>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </Strings>
    </Table>
  );
  
  TransactionHistory.propTypes = {
    item: PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  };
  
  export default TransactionHistory;