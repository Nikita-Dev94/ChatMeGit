import React, { useEffect } from 'react';
import s from "./Header.module.css";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMyInfo } from '../../redux/authReducer';
import { NavLink } from 'react-router-dom';

const Header = () => {

	const dispatch = useDispatch();


	useEffect(() => {
		const pathApi = 'https://social-network.samuraijs.com/api/1.0'
		axios
			.get(`${pathApi}/auth/me`, {
				withCredentials: true
			})
			.then(res => {
				if (res.data.resultCode === 0) {
					let { id, email, login } = res.data.data
					dispatch(setMyInfo({ id, email, login }))
				}
			})

	}, [dispatch])

	const authInfo = useSelector(state => state.auth)

	return (
		<header className={s.header}>
			<img src='./img/logo.svg' alt='Logo' className={s.logo} />
			<NavLink to={`profile/${authInfo.id}`} >{authInfo.login}</NavLink>
		</header>
	);
}

export default Header