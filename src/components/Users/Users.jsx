import React from 'react'

import User from './User/User'


export default function Users(props) {

	const follow = (userId) => {
		props.follow(userId)
	}
	const unfollow = (userId) => {
		props.unfollow(userId)
	}


	let oneUser = props.users.map((u) =>

		<User key={u.id}
			id={u.id}
			fullName={`${u.fullName.name} ${u.fullName.secondName}`}
			location={`${u.location.country}, ${u.location.city}`}
			status={u.status}
			followed={u.followed}
			avatarURL={u.avatarURL}
			follow={follow}
			unfollow={unfollow}
		/>)
	return (
		< div >
			{oneUser}
		</ div>
	)
}
