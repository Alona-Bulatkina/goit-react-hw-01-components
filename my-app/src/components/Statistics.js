import PropTypes from "prop-types";
import data from '../data.json';

export default function Statistics(props) {
  return (
      data.map(datas => (
    <li className="item">
      <span className="label">{datas.labal}</span>
      <span className="percentage">{datas.percentage}</span>
    </li>))
     )};

    Statistics.propTypes = {
      labal: PropTypes.string,
      percentage: PropTypes.number,
    }
