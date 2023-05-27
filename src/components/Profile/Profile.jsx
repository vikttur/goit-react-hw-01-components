import ProfileStatList from "../ProfileStatList/ProfileStatList";

export default function Profile(props) {
	const { username, tag, location, avatar, stats } = props;
	const { followers, views, likes } = stats;

	return (
		<div className="profile">
			<div className="description">
				<img src={avatar} alt="User avatar" className="avatar" />
				<p className="name">{username}</p>
				<p className="tag">@{tag}</p>
				<p className="location">{location}</p>
			</div>

			<ProfileStatList followers={followers} views={views} likes={likes} />
		</div>
	);
}
