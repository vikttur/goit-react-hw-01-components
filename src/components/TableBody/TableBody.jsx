import PropTypes from "prop-types";

export default function TableBody({ type, amount, currency }) {
	return (
		<tr>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	);
}

TableBody.propTypes = {
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
};
