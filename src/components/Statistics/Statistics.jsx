import PropTypes from "prop-types";
import StatisticsList from "../StatisticsList/StatisticsList";
import css from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
	return (
		<section className={css.statistics}>
			{title && <h2 className={css.title}>{title}</h2>}
			<StatisticsList stats={stats} />
		</section>
	);
}

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		}),
	).isRequired,
};
