import PropTypes from "prop-types";

export default function ListActivies({ followers, views, likes }) {
	return (
		<ul className="stats">
			<li>
				<span className="label">Followers</span>
				<span className="quantity">{followers}</span>
			</li>
			<li>
				<span className="label">Views</span>
				<span className="quantity">{views}</span>
			</li>
			<li>
				<span className="label">Likes</span>
				<span className="quantity">{likes}</span>
			</li>
		</ul>
	);
}

ListActivies.propTypes = {
	followers: PropTypes.number,
	views: PropTypes.number,
	likes: PropTypes.number,
};
