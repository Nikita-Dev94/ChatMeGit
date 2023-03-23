import React from 'react';
import s from "./User.module.css";
import Key from "./Key/Key";
import Avatar from "./Avatar/Avatar";
import { useSelector } from 'react-redux';



const User = () => {

	const keyData = useSelector(state => state.profilePage.keyData)

	let keysElement = keyData.map(k => <Key key={k.title} title={k.title} value={k.value} />)

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



export default User
