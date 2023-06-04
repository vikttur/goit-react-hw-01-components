import PropTypes from "prop-types";
import TableBody from "../TableBody/TableBody";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
	return (
		<section className={css.transactions}>
			<table className={css.transactionHistory}>
				<thead>
					<tr>
						<th>Type</th>
						<th>Amount</th>
						<th>Currency</th>
					</tr>
				</thead>

				<tbody>
					{items.map(({ id, type, amount, currency }) => {
						return <TableBody key={id} type={type} amount={amount} currency={currency} />;
					})}
				</tbody>
			</table>
		</section>
	);
}

TransactionHistory.propTypes = {
	item: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		}),
	),
};
