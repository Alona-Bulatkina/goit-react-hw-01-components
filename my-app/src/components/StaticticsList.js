import Statistics from "./Statistics";
import PropTypes from 'prop-types';

export default function StaticticsList ({ items }) {
return (<ul>
        <li key={items.id}>
        <Statistics
        labal={items.label} 
        percentage={items.percentage} />
      </li>
</ul>
)}

StaticticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}