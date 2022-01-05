import Statistics from "./Statistics";
import PropTypes from 'prop-types';

export default function StaticticsList ({ items }) {
return (<ul>
        <Statistics
        labal={items.label} 
        percentage={items.percentage} />
      </ul>
)}

StaticticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}