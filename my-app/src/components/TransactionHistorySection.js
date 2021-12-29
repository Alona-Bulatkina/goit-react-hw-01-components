import PropTypes from "prop-types";

export default function TransactionHistorySection({ title, children }) {
    return (
<table className="transaction-history">
  <thead>
    <tr>
      {title && <th>Type</th>}
      {title && <th>Amount</th>}
      {title && <th>Currency</th>}
      {children}
    </tr>
  </thead>
</table>
    )
}
TransactionHistorySection.protoType = {
    title: PropTypes.string,
}