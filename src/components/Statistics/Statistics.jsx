import StatisticsList from "../StatisticsList/StatisticsList";

export default function Statistics(props) {
	const { title, stats } = props;
	// const { id, label, percentage } = stats[0];

	return (
		<section className="statistics">
			{title && <h2 className="title">{title}</h2>}

			<StatisticsList statsData={stats} />
			{/* <StatisticsList id={stats[4].id} label={stats[0].label} percentage={stats[1].percentage} /> */}
		</section>
	);
}
