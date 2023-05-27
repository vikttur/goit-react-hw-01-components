import ProfileStatList from "../ProfileStatList/ProfileStatList";

export default function Profile(props) {
	const { username, tag, location, avatar, stats } = props;

	return (
		<div className="profile">
			<div className="description">
				<img src={avatar} alt="User avatar" className="avatar" />
				<p className="name">{username}</p>
				<p className="tag">@{tag}</p>
				<p className="location">{location}</p>
			</div>

			<ProfileStatList followers={stats.followers} views={stats.views} likes={stats.likes} />
		</div>
	);
}
