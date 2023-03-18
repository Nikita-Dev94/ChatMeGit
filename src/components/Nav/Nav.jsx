import React from 'react';
import s from "./Nav.module.css";
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';



const Nav = () => {

	return (
		<nav className={s.nav}>
			<ul className={s.list}>
				<li className={s.item}> <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.link}>Моя страница</NavLink></li>
				<li className={s.item}> <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.link}>Сообщения</NavLink></li>
				<li className={s.item}> <NavLink to='/users'>Пользователи</NavLink></li>
				<li className={s.item}> <NavLink to='#2'>Новости</NavLink></li>
				<li className={s.item}> <NavLink to='#2'>Музыка</NavLink></li>
				<li className={s.item}> <NavLink to='#2' >Настройки</NavLink></li>
			</ul>
			<FriendsContainer />
		</nav>
	);

}







export default Nav