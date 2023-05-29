import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
	const friendList = friends.map(item => {
		const { id, avatar, name, isOnline } = item;
		return <FriendListItem key={id.toString()} avatar={avatar} name={name} isOnline={isOnline} />;
	});

	return <ul className="friend-list">{friendList}</ul>;
}
