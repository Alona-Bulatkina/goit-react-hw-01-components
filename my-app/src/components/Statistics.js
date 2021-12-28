import PropTypes from "prop-types";
import data from '../data.json';
import App from "../App";

export default function Statistics(props) {
    const { labal, percentage } = props;
  return (
        <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    {data.map(datas => (
    <li className="item">
      <span className="label">{datas.labal}</span>
      <span className="percentage">{datas.percentage}</span>
    </li>))}
  </ul>
</section>
    )};

    Statistics.propTypes = {
      labal: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }
{/* <Statistics key={datas.id} labal={datas.label} percentage={datas.percentage} /> */}
    // ReactDOM.render(<App />, document.querySelector('#root'));