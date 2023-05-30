import PropTypes from "prop-types";
import StatisticsItem from "../StatisticsItem/StatisticsItem";

export default function StatisticsList({ stats }) {
	const statList = stats.map(item => {
		const { id, label, percentage } = item;
		return <StatisticsItem key={id} label={label} percentage={percentage} />;
	});

	return <ul className="stat-list">{statList}</ul>;
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
