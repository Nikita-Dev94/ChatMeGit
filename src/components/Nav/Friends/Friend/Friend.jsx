import React from 'react';
import s from "./Friend.module.css";
import { NavLink } from 'react-router-dom';
import defaultURL from '../../../../img/deafult.png';

const Friend = (props) => {

	return (
		<NavLink to={`/profile/${props.id}`} className={s.friend}>
			<img src={props.src != null ? props.src : defaultURL} alt="" />
			<span className={s.name}>{props.name}</span>
		</NavLink>
	);
}
export default Friend