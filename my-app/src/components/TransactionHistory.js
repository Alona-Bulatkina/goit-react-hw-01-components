import PropTypes from "prop-types";
import transactions from "../transactions.json";

export default function TransactionHistory(props) {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  
      {transactions.map(transaction => (
    <tbody>
        <tr>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
        </tr>
    </tbody>))}
</table>
      )}

      TransactionHistory.protoType = {
        type: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.string,
      }

//     <TransactionHistory key={transaction.id} type={transaction.type}
// amount={transaction.amount} currency={transaction.currency} />