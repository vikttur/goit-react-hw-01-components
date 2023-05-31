import PropTypes from "prop-types";
import css from "./FriendItem.module.css";

export default function FriendItem({ avatar, name, isOnline }) {
	return (
		<li className={css.item}>
			<span className={isOnline ? css.online : css.notOnline}></span>
			<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
			<p className={css.name}>{name}</p>
		</li>
	);
}

FriendItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};
