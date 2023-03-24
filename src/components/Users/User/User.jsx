import React from 'react'
import s from './User.module.css'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { follow, unfollow } from '../../../redux/usersReducer';
import { setUnfollow, setFollow } from './../../../api/api';


export default function User(props) {

	const dispatch = useDispatch();
	return (
		<div>
			{props.followed === true
				? <button className={s.subscrBtn} onClick={() => {
					setUnfollow(props.id)
						.then(data => {
							if (data.resultCode === 0) {
								dispatch(unfollow(props.id))
							}
						})
				}

				}>Отписаться</button>
				: <button className={s.subscrBtn} onClick={() => {
					setFollow(props.id)
						.then(data => {
							if (data.resultCode === 0) {
								dispatch(follow(props.id))
							}
						})
				}
				}>Подписаться</button>
			}
			<NavLink to={'/profile/' + props.id}>
				<div className={s.left__side}>
					<img src={props.avatarURL != null ? props.avatarURL : 'https://ac204.digitalmind.su/Images/sostav/students/muhanov.jpg'}
						alt={'props.fullName'} className={s.userAvatar} />

				</div>
				<div className={s.aboutUser}>
					<div>
						<p className={s.fullName}>{props.fullName}</p>
						<p className={s.status}>{props.status}</p>
					</div>
					<div className={s.location}>{'props.location'}</div>
				</div>
			</ NavLink>
		</div >
	)
}
