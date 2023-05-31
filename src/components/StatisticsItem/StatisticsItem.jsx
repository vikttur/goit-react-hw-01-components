import PropTypes from "prop-types";
import css from "./StatisticsItem.module.css";

export default function StatisticsItem({ label, percentage }) {
	return (
		<li className={css.item}>
			<span className={css.label}>{label}</span>
			<span className={css.percentage}>{percentage}%</span>
		</li>
	);
}

StatisticsItem.propTypes = {
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};
