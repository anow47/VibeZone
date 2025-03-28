import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../navbar";
import FriendListWidget from "../widgets/FriendListWidget";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";
import UserWidget from "../widgets/UserWidget";

const ProfilePage = () => {
	const [user, setUser] = useState(null);
	const { userId } = useParams();
	const token = useSelector((state) => state.token);
	const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const apiUrl = import.meta.env.VITE_API_URL;

	const getUser = async () => {
		try {
			const response = await fetch(`${apiUrl}/users/${userId}`, {
				method: "GET",
				headers: { Authorization: `Bearer ${token}`}
			});

			if (!response.ok) {
				throw new Error("Faild to fetch users: ");
			}

			const data = await response.json();
			setUser(data);

		} catch (error) {
			console.error("Error fetching users: ", error);
		}
	};

	useEffect(() => {
		getUser();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if (!user) return null;

  return (
		<Box>
			<NavBar />
			<Box
				width="100%"
				padding="2rem 6%"
				display={isNonMobileScreens ? "flex" : "block"}
				gap="2rem"
				justifyContent="center"
			>
				<Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
					<UserWidget userId={userId} picturePath={user.picturePath} />
					<Box m="2rem 0" />
					<FriendListWidget userId={userId} />
				</Box>
				<Box 
					flexBasis={isNonMobileScreens ? "42%" : undefined}
					mt={isNonMobileScreens ? undefined : "2rem"}
				>
					<MyPostWidget picturePath={user.picturePath} />
					<Box m="2rem 0" />
					<PostsWidget userId={userId} isProfile />
				</Box>
			</Box>
		</Box>
	);
};

export default ProfilePage;