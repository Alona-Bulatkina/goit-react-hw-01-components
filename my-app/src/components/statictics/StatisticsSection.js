import PropTypes from "prop-types";
export default function StatisticsSection({ title, children }) {
    return (
        <section>
            {title && <h2>{title}</h2>} 
            {children}
        </section>
        );
}
StatisticsSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}