import React from 'react';
import s from "./DialogAuthor.module.css";
import { NavLink } from 'react-router-dom';


const DialogAuthor = (props) => {
	let path = '/dialogs/' + props.id;
	return (

		<li className={s.item}>
			<NavLink to={path} className={navData => navData.isActive ? `${s.active} ${s.link}` : s.link}>
				{props.author}
			</NavLink>
		</li >

	);
}


export default DialogAuthor