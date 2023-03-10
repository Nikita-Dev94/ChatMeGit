import React from 'react';
import s from "./Key.module.css";


const Key = (props) => {
	return (
		<li className={s.key}>{props.title}: {props.value}</li>
	);
}
export default Key