export default function FriendListItem(props) {
	const { id, avatar, name, isOnline } = props;

	return (
		<li className="item">
			<span className="status">555{isOnline}</span>
			<img className="avatar" src={avatar} alt="User avatar" width="48" />
			<p className="name">{name}</p>
		</li>
	);
}
