import TableBody from "../TableBody/TableBody";

export default function TransactionHistory({ items }) {
	const tableItems = items.map(item => {
		const { id, type, amount, currency } = item;
		return <TableBody key={id} type={type} amount={amount} currency={currency} />;
	});

	return (
		<table className="transaction-history">
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>{tableItems}</tbody>
		</table>
	);
}
