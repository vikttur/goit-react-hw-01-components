export default function TableBody(row) {
	const { type, amount, currency } = row;

	return (
		<tr>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	);
}
