import React from 'react';
import s from "./Friends.module.css";
import Friend from './Friend/Friend';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setFriends } from '../../../redux/navbarReducer';



const Friends = () => {
	const dispatch = useDispatch();

	const currentPage = useSelector(state => state.navbar.currentPage)
	const usersOnPage = useSelector(state => state.navbar.usersOnPage)

	const createFriends = () => {
		const pathApi = 'https://social-network.samuraijs.com/api/1.0'
		axios
			.get(`${pathApi}/users?page=${currentPage}&count=${usersOnPage}`)
			.then(res => {
				dispatch(setFriends(res.data.items))
			})
	}
	const friends = useSelector(state => state.navbar.friends)
	if (friends.length === 0) {
		createFriends()
	}

	let friendsElement = friends.map(f => <Friend key={f.id} src={f.photos.small} name={f.name} id={f.id} />)

	return (
		<div className={s.friends}>
			{friendsElement}
		</div>
	);

}

export default Friends