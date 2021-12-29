import TransactionHistory from "./TransactionHistory";
import PropTypes from "prop-types";

export default function TransactionHistoryList ({ items }) {
    return (<tbody>
        <tr key={items.id}>
        <TransactionHistory 
            type={items.type}
            amount={items.amount} 
            currency={items.currency} />
        </tr>
    </tbody>
    )
}

TransactionHistoryList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}