import user from "./data/user.json";
// import data from "./data/data.json";
// import friends from "./data/friends.json";
import Profile from "./components/Profile/Profile";
// import Statistics from "./components/Statistics/Statistics";
// import FriendList from "./components/FriendList/FriendList";

const { username, tag, location, avatar, stats } = user;

export default function App() {
	return (
		<Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
		// <Statistics title={"Upload stats"} stats={data} />
		// <FriendList friends={friends} />
	);
}
