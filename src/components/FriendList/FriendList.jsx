import PropTypes from "prop-types";
import FriendItem from "../FriendItem/FriendItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
	const friendList = friends.map(({ id, avatar, name, isOnline }) => {
		return <FriendItem key={id.toString()} avatar={avatar} name={name} isOnline={isOnline} />;
	});

	return <ul className={css.friendList}>{friendList}</ul>;
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			avatar: PropTypes.string,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
		}),
	),
};
