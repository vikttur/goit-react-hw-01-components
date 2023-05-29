export default function FriendListItem(props) {
	const { avatar, name, isOnline } = props;

	return (
		<li className={isOnline ? "item" : ""}>
			<span className="status">555</span>
			<img className="avatar" src={avatar} alt="User avatar" width="48" />
			<p className="name">{name}</p>
		</li>
	);
}
