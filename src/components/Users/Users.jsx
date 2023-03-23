import React from 'react'
import User from './User/User'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setTotalCount, setCurrentPage, setUsers, follow, unfollow } from '../../redux/usersReducer'
import s from './Users.module.css'



export default function Users(props) {

	const dispatch = useDispatch()
	const users = useSelector((state) => state.usersPage.users);
	const currentPage = useSelector(state => state.usersPage.currentPage);
	const usersOnPage = useSelector(state => state.usersPage.usersOnPage)
	const totalCount = useSelector(state => state.usersPage.totalCount)

	const followed = (userId) => {
		dispatch(follow(userId))
	}
	const unfollowed = (userId) => {
		dispatch(unfollow(userId))
	}

	const createUsers = () => {
		const pathApi = 'https://social-network.samuraijs.com/api/1.0'
		axios
			.get(`${pathApi}/users?page=${currentPage}&count=${usersOnPage}`)
			.then(res => {
				dispatch(setTotalCount(res.data.totalCount))
				dispatch(setUsers(res.data.items))

			})
	}

	if (users.length === 0) {
		createUsers()
	}



	// Preloader
	// https://loading.io/asset/647514


	let oneUser = users.map((u) =>
		< User key={u.id}
			id={u.id}
			fullName={u.name}
			// location={`${u.location.country}, ${u.location.city}`}
			status={u.status}
			followed={u.followed}
			avatarURL={u.photos.large}
			follow={followed}
			unfollow={unfollowed}
		/>)



	let pagesAll = Math.ceil(totalCount / usersOnPage);


	let pages = [];


	for (let i = 1; i <= pagesAll; i++) {
		pages.push(i)
	}

	let test = pages.map((p) => {
		if (currentPage <= 5) {
			while (p <= 10) {
				return <button onClick={() => { dispatch(setCurrentPage(p)) }}
					className={currentPage === p ? `${s.currentPage} ${s.page}` : s.page}
					key={p}>{p}</button >


			}
		} else {
			for (let i = p + currentPage - 5; i <= currentPage + 6; i++) {
				return <button onClick={() => { dispatch(setCurrentPage(i)) }}
					className={currentPage === i ? `${s.currentPage} ${s.page}` : s.page}
					key={i}>{i}</button >

			}
		}
	})

	return (
		< div >
			{test}
			{oneUser}
		</ div>
	)
}
