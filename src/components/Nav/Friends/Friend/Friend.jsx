import React from 'react';
import s from "./Friend.module.css";
import { NavLink } from 'react-router-dom';


const Friend = (props) => {

	return (
		<NavLink to={`/profile/${props.id}`} className={s.friend}>
			<img src={props.src != null ? props.src : 'https://ac204.digitalmind.su/Images/sostav/students/muhanov.jpg'} alt="" />
			<span className={s.name}>{props.name}</span>
		</NavLink>
	);
}
export default Friend