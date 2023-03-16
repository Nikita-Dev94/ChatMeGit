import React from 'react';
import s from "./Friend.module.css";
import { NavLink } from 'react-router-dom';


const Friend = (props) => {

	return (
		<NavLink to={`/user/${props.id}`} className={s.friend}>
			<img src={props.src} alt="" />
			<span className={s.name}>{props.name}</span>
		</NavLink>
	);
}
export default Friend