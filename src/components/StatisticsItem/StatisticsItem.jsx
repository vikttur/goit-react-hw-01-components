export default function StatisticsItem(props) {
	const { label, percentage } = props;

	return (
		<li className="item">
			<span className="label">{label}</span>
			<span className="percentage">{percentage}</span>
		</li>
	);
}
