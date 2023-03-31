import React, { useEffect, useState } from 'react';
import s from "./Header.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../api/api';
import { delMyInfo, setMyPhoto } from '../../redux/authReducer';
import { getUserInfo } from './../../api/api';
import logo from '../../img/logo.svg';


const Header = () => {
	const authInfo = useSelector(state => state.auth)
	const photo = useSelector(state => state.profilePage.profile.photos.small)

	const profile = React.createRef()
	const dispatch = useDispatch()

	const fullLogOut = () => {
		logOut()
		dispatch(delMyInfo())
	}
	return (
		<header className={s.header}>
			<img src={logo} alt='Logo' className={s.logo} />
			{authInfo.isAuth &&
				<div>
					<img className={s.avatarSmall} src={authInfo.smallPhoto} alt="avatar" />
					<NavLink className={s.profileLink} to={`profile/${authInfo.id}`}
						ref={profile}>
						{authInfo.login}
					</NavLink>
					<button className={s.dropBtn}
						onClick={fullLogOut} title='Выйти'>
						<svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="0.875" y="1.375" width="19.9428" height="19.25" rx="5" stroke="#232323" strokeWidth="2" strokeLinecap="round" />
							<path d="M14.4526 11.0434L26.811 11.0434" stroke="#232323" strokeWidth="2" strokeLinecap="round" />
							<path d="M24.1627 8.36481L27.0486 11.0162" stroke="#232323" strokeWidth="2" strokeLinecap="round" />
							<path d="M24.1627 13.6072L27.125 11.0434" stroke="#232323" strokeWidth="2" strokeLinecap="round" />
						</svg>
					</ button>
				</div>
			}
		</header>
	);
}

export default Header