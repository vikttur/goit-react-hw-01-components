import PropTypes from "prop-types";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import css from "./StatisticsList.module.css";

export default function StatisticsList({ stats }) {
	const statList = stats.map(({ id, label, percentage }) => {
		return <StatisticsItem key={id} label={label} percentage={percentage} />;
	});

	return <ul className={css.statList}>{statList}</ul>;
}

StatisticsList.propTypes = {
	stats: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		}),
	),
};
