import React from 'react';
import s from "./Nav.module.css";
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Nav = (props) => {

	return (
		<nav className={s.nav}>
			<ul className={s.list}>
				<li className={s.item}> <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Моя страница</NavLink></li>
				<li className={s.item}> <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Сообщения</NavLink></li>
				<li className={s.item}> <NavLink to='#2'>Новости</NavLink></li>
				<li className={s.item}> <NavLink to='#2'>Музыка</NavLink></li>
				<li className={s.item}> <NavLink to='#2' >Настройки</NavLink></li>
			</ul>

			<div >
				<Friends state={props.state.friends} />
			</div >
		</nav>
	);
}
export default Nav