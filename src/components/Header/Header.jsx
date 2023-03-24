import React, { useEffect } from 'react';
import s from "./Header.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setMyInfo } from '../../redux/authReducer';
import { NavLink } from 'react-router-dom';
import { getMyInfo } from '../../api/api';

const Header = () => {

	const dispatch = useDispatch();


	useEffect(() => {
		getMyInfo()
			.then(data => {
				if (data.resultCode === 0) {
					let { id, email, login } = data.data
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