import React from 'react';
import s from "./DialogField.module.css";
import Message from './Message/Message';
import CreateMessage from './CreateMessage/CreateMessage';
import { useSelector } from 'react-redux';



const DialogField = () => {
	const messages = useSelector(state => state.dialogsPage.messages)



	let messagesEl = messages.map(m => <Message key={m.id} message={m.message} />)
	return (
		<div className={s.dialogField}>
			{messagesEl}
			<CreateMessage />
		</div>

	);
}


export default DialogField