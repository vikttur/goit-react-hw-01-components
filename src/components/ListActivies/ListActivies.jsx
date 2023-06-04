import PropTypes from "prop-types";
import css from "./ListActivies.module.css";

export default function ListActivies({ stats }) {
	const userStatistics = Object.entries(stats);

	return (
		<ul className={css.stats}>
			{userStatistics.map(stat => {
				return (
					<li key={stat[0]} className={css.item}>
						<span className={css.label}>{stat[0]}</span>
						<span className={css.quantity}>{stat[1]}</span>
					</li>
				);
			})}
		</ul>
	);
}

ListActivies.propTypes = {
	stats: PropTypes.object.isRequired,
};
