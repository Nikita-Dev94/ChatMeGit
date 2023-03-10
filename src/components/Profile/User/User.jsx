import React from 'react';
import s from "./User.module.css";
import Key from "./Key/Key";
import Avatar from "./Avatar/Avatar";


export const User = (props) => {


	let keysElement = props.keyData.map(k => <Key title={k.title} value={k.value} />)

	return (
		<div className={s.user}>
			<Avatar src='https://www.pinclipart.com/picdir/big/133-1331433_free-user-avatar-icons-happy-flat-design-png.png' />
			<div className={s.info}>
				<h2 className={s.titleName}>Никитос</h2>
				<ul className={s.about}>
					{keysElement}
				</ul>
			</div>
		</div>
	);
}
