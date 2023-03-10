import React from 'react';
import s from "./Avatar.module.css";


const Avatar = (props) => {
	return (
		<img src={props.src} alt='User avatar' className={s.avatar} />

	);
}
export default Avatar