import React from 'react';
import s from "./DialogField.module.css";
import Message from './Message/Message';
import CreateMessage from './CreateMessage/CreateMessage';



const DialogField = (props) => {


	let messagesEl = props.messages.map(m => <Message message={m.message} />)
	return (
		<div className={s.dialogField}>
			{messagesEl}
			<CreateMessage messageText={props.messageText} dispatch={props.dispatch} />
		</div>

	);
}


export default DialogField