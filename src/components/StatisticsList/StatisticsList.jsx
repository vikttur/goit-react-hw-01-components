export default function StatisticsList(props) {
	const { id, label, percentage } = props;

	return (
		<ul className="stat-list">
			<li key={id} className="item">
				<span className="label">{label}</span>
				<span className="percentage">{percentage}</span>
			</li>
		</ul>
	);
}
