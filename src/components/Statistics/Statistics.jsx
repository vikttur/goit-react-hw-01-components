import StatisticsList from "../StatisticsList/StatisticsList";

export default function Statistics({ title, stats }) {
	return (
		<section className="statistics">
			{title && <h2 className="title">{title}</h2>}
			<StatisticsList stats={stats} />
		</section>
	);
}
