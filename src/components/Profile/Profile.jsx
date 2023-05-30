import PropTypes from "prop-types";
import Card from "../Card/Card";
import ListActivies from "../ListActivies/ListActivies";

export default function Profile({ username, tag, location, avatar, stats }) {
	const { followers, views, likes } = stats;

	return (
		<div className="profile">
			<Card username={username} tag={tag} location={location} avatar={avatar} />
			<ListActivies followers={followers} views={views} likes={likes} />
		</div>
	);
}

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string,
	stats: PropTypes.object.isRequired,
};
