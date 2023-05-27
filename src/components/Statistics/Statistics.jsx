import StatisticsList from "../StatisticsList/StatisticsList";

export default function Statistics(props) {
	const { title, data } = props;

	return (
		<section className="statistics">
			{title && <h2 className="title">{title}</h2>}

			<StatisticsList id={data.id} label={data.label} percentage={data.percentage} />
		</section>
	);
}
