import React from 'react';
import s from "./DialogField.module.css";
import Message from './Message/Message';
import CreateMessageContainer from './CreateMessage/CreateMessageContainer';



const DialogField = (props) => {


	let messagesEl = props.messages.map(m => <Message message={m.message} />)
	return (
		<div className={s.dialogField}>
			{messagesEl}
			<CreateMessageContainer />
		</div>

	);
}


export default DialogField