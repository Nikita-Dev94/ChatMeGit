import React from 'react'
import User from './User/User'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import s from './Users.module.css'



export default function Users(props) {



	const follow = (userId) => {
		props.follow(userId)
	}

	const unfollow = (userId) => {
		props.unfollow(userId)
	}
	const dispatch = useDispatch()
	const users = useSelector((state) => state.usersPage.users);
	const currentPage = useSelector(state => state.usersPage.currentPage);
	const usersOnPage = useSelector(state => state.usersPage.usersOnPage)


	const createUsers = () => {
		const pathApi = 'https://social-network.samuraijs.com/api/1.0'
		axios
			.get(`${pathApi}/users?page=${currentPage}&count=${usersOnPage}`)
			.then(res => {
				props.setTotalCount(res.data.totalCount)
				props.setUsersStore(res.data.items)
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
			avatarURL={u.photos.small}
			follow={follow}
			unfollow={unfollow}
		/>)



	let btns = Math.ceil(props.totalUsers / usersOnPage);


	let pages = [];


	for (let i = 1; i <= 10; i++) {
		pages.push(i)
	}

	let test = pages.map((p) => {
		return <button onClick={() => { props.setCurrentPage(p) }} className={currentPage === p ? `${s.currentPage} ${s.page}` : s.page} key={p} > {p}</button >
	})
	return (
		< div >
			{test}
			{oneUser}
		</ div>
	)
}
