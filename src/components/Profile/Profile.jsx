import React from 'react';
import { OwnerPage } from "./OwnerPage/OwnerPage"
import MyPosts from "./MyPosts/MyPosts"
import User from './User/User';



const Profile = () => {

	return (
		<div>
			<OwnerPage />
			<User />
			<MyPosts />
		</div>
	);
}

export default Profile


