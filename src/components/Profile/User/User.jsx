import React from 'react';
import s from "./User.module.css";
import Key from "./Key/Key";
import Avatar from "./Avatar/Avatar";
import { useSelector, useDispatch } from 'react-redux';
import { setInfo } from '../../../redux/profileReducer';
import { setMyInfo } from '../../../redux/authReducer';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



const User = () => {
	const keyData = useSelector(state => state.profilePage.keyData)
	const aboutMe = useSelector(state => state.profilePage.profile.aboutMe)
	const name = useSelector(state => state.profilePage.profile.fullName)
	const avatarURL = useSelector(state => state.profilePage.profile.photos.large)

	const dispatch = useDispatch()
	let location = useLocation();


	const pathApi = 'https://social-network.samuraijs.com/api/1.0'
	if (location.pathname !== '/profile') {

		axios
			.get(`${pathApi}${location.pathname}`)
			.then(res => {
				dispatch(setInfo(res.data))
			})
	} else {
		axios
			.get(`${pathApi}/auth/me`, {
				withCredentials: true
			})
			.then(res => {
				if (res.data.resultCode === 0) {
					let { id, email, login } = res.data.data;
					dispatch(setMyInfo({ id, email, login }))
				}
			})
	}






	const keysElement = keyData.map(k => <Key key={k.title} title={k.title} value={k.value} />)

	return (
		<div className={s.user}>
			<Avatar src={!avatarURL ? 'https://sun9-77.userapi.com/impf/c855128/v855128722/b33b2/k7N1ayRH_vo.jpg?size=1280x720&quality=96&sign=1c06a97749667926dab18bb8153b1a96&c_uniq_tag=b1Om0LVHhG6dcuDSaUevwn2DALnrsq4Z6RqoJdnIG9g&type=album' : avatarURL} />
			<div className={s.info}>
				<h2 className={s.titleName}>{name}</h2>
				<ul className={s.about}>
					{keysElement}
				</ul>
				<p>{aboutMe}</p>
			</div>

		</div>
	);


}



export default User
