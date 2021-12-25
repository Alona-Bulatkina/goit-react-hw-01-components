import PropTypes from "prop-types";

const data = [
    { "id": "id-1", "label": ".docx", "percentage": 22 },
    { "id": "id-2", "label": ".pdf", "percentage": 4 },
    { "id": "id-3", "label": ".mp3", "percentage": 17 },
    { "id": "id-4", "label": ".psd", "percentage": 47 },
    { "id": "id-5", "label": ".pdf", "percentage": 10 }
]

export default function Statistics(props) {
    return (
        <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li className="item">
      <span className="label">{data.labal}</span>
      <span className="percentage">{data.percentage}</span>
    </li>
    <li className="item">
      <span className="label">{data.labal}</span>
      <span className="percentage">{data.percentage}</span>
    </li>
    <li className="item">
      <span className="label">{data.labal}</span>
      <span className="percentage">{data.percentage}</span>
    </li>
    <li className="item">
      <span className="label">{data.labal}</span>
      <span className="percentage">{data.percentage}</span>
    </li>
  </ul>
</section>
    )};

    ReactDOM.render(Statistics, document.querySelector('#root'));