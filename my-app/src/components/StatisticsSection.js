import PropTypes from "prop-types";
export default function StatisticsSection({ title, stats }) {
    return (
        <section>
            {title && <h2>{title}</h2>} 
            {stats}
        </section>
        );
}
StatisticsSection.propTypes = {
    title: PropTypes.string,
}