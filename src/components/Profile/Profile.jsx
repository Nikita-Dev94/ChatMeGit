import React from 'react';
// import s from "./Profile.module.css";
import { OwnerPage } from "./OwnerPage/OwnerPage"

import MyPostsContainer from "./MyPosts/MyPostsContainer"
import UserContainer from './User/UserContainer';


const Profile = () => {
	return (
		<div>
			<OwnerPage />
			<UserContainer />
			<MyPostsContainer />

		</div>
	);
}

export default Profile


