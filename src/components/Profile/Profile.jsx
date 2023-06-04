import PropTypes from "prop-types";
import Card from "../Card/Card";
import ListActivies from "../ListActivies/ListActivies";
import css from "./Profile.module.css";

export default function Profile({ user }) {
	const { username, tag, location, avatar, stats } = user;

	return (
		<div className={css.profile}>
			<Card username={username} tag={tag} location={location} avatar={avatar} />
			<ListActivies stats={stats} />
		</div>
	);
}

Profile.propTypes = {
	user: PropTypes.exact({
		username: PropTypes.string.isRequired,
		tag: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		stats: PropTypes.object.isRequired,
	}).isRequired,
};
