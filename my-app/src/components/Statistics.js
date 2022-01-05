import PropTypes from "prop-types";
import data from '../data.json';
import { Item, Data } from '../statistics.styled';

export default function Statistics(props) {
  return (
      data.map(datas => (
    <Item key={datas.id}>
      <Data>{datas.label} - </Data>
      <Data>{datas.percentage}</Data>
    </Item>))
     )};

    Statistics.propTypes = {
      labal: PropTypes.string,
      percentage: PropTypes.number,
    }
