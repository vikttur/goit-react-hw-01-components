import user from "./data/user.json";
// import data from "./data/data.json";
// import friends from "./data/friends.json";
import Profile from "./components/Profile/Profile";
// import Statistics from "./components/Statistics/Statistics";
// import FriendList from "./components/FriendList/FriendList";

export default function App() {
	return (
		<Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
		// <Statistics id={data.id} label={data.label} percentage={data.percentage} />
		// <FriendList friends={friends} />
	);
}
