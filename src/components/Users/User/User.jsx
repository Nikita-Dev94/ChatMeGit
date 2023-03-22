import React from 'react'
import s from './User.module.css'


export default function User(props) {

	const follow = () => {
		props.follow(props.id)
	}
	const unfollow = () => {
		props.unfollow(props.id)
	}


	return (
		<div>
			<div className={s.left__side}>
				<img src={props.avatarURL != null ? props.avatarURL : 'https://ac204.digitalmind.su/Images/sostav/students/muhanov.jpg'}
					alt={'props.fullName'} className={s.userAvatar} />
				{props.followed === true
					? <button className={s.subscrBtn} onClick={unfollow}>Отписаться</button>
					: <button className={s.subscrBtn} onClick={follow}>Подписаться</button>}
			</div>
			<div className={s.aboutUser}>
				<div>
					<p className={s.fullName}>{props.fullName}</p>
					<p className={s.status}>{props.status}</p>
				</div>
				<div className={s.location}>{'props.location'}</div>
			</div>
		</div >
	)
}
