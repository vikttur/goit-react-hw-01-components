import PropTypes from "prop-types";

export default function FriendItem({ avatar, name, isOnline }) {
	return (
		<li className="item">
			<span className={isOnline ? "online" : "not-online"}>555</span>
			<img className="avatar" src={avatar} alt="User avatar" width="48" />
			<p className="name">{name}</p>
		</li>
	);
}

FriendItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};
