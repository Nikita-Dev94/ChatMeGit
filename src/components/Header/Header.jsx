import React from 'react';
import s from "./Header.module.css";

const Header = () => {
	return (
		<header className={s.header}>
			<img src='./img/logo-max.png' alt='Logo' className={s.logo} />
		</header>
	);
}

export default Header