import React from 'react';
// import s from "./Profile.module.css";
import { OwnerPage } from "./OwnerPage/OwnerPage"
import { User } from "./User/User"
import { MyPosts } from "./MyPosts/MyPosts"


const Profile = (props) => {
	return (
		<div>
			<OwnerPage />
			<User keyData={props.state.keyData} quote='Она тебя сожрет! Палку! Палку давай!' date='31/01/1994' education='Не ПТУ а Колледж' site='ebanayrama.xyu' city='ЗШК - страна чудес, зашел в подьезд тебе пиздец' />
			<MyPosts posts={props.state.posts} textPost={props.state.textPost} dispatch={props.dispatch} />
		</div>
	);
}

export default Profile


