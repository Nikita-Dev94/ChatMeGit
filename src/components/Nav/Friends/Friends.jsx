import React from 'react';
import s from "./Friends.module.css";
import Friend from './Friend/Friend';



const Friends = (props) => {


	let friendsElement = props.friends.map(f => <Friend src={f.src} name={f.name} id={f.id} />)

	return (
		<div className={s.friends}>
			{friendsElement}
		</div>
	);

}

export default Friends