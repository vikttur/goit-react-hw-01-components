import PropTypes from "prop-types";
import Card from "../Card/Card";
import ListActivies from "../ListActivies/ListActivies";
import css from "./Profile.module.css";

export default function Profile({ user }) {
	const { username, tag, location, avatar, stats } = user;
	const { followers, views, likes } = stats;

	return (
		<div className={css.profile}>
			<Card username={username} tag={tag} location={location} avatar={avatar} />
			<ListActivies followers={followers} views={views} likes={likes} />
		</div>
	);
}

Profile.propTypes = {
	user: PropTypes.exact({
		username: PropTypes.string.isRequired,
		tag: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		stats: PropTypes.exact({
			followers: PropTypes.number.isRequired,
			views: PropTypes.number.isRequired,
			likes: PropTypes.number.isRequired,
		}).isRequired,
	}).isRequired,
};
