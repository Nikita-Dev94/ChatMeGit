import React from 'react';
import s from "./Header.module.css";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const authInfo = useSelector(state => state.auth)

	return (
		<header className={s.header}>
			<img src='./img/logo.svg' alt='Logo' className={s.logo} />
			<NavLink to={`profile/${authInfo.id}`} >{authInfo.login}</NavLink>
		</header>
	);
}

export default Header