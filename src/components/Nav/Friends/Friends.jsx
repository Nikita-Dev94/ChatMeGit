import React from 'react';
import s from "./Friends.module.css";
import Friend from './Friend/Friend';
import { useSelector, useDispatch } from 'react-redux';
import { setFriends } from '../../../redux/navbarReducer';
import { getFriends } from '../../../api/api';



const Friends = () => {
	const dispatch = useDispatch();

	const currentPage = useSelector(state => state.navbar.currentPage)
	const usersOnPage = useSelector(state => state.navbar.usersOnPage)

	const createFriends = () => {
		getFriends(currentPage, usersOnPage)
			.then(data => {
				dispatch(setFriends(data.items))
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