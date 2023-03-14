import React from 'react';

import { pushMessageCreateAction, updateMessageTextFieldCreateAction } from './../../../../redux/dialogsReducer';
import s from "./CreateMessage.module.css";

const CreateMessage = (props) => {
	let createMessageField = React.createRef();

	const pushMessage = () => {
		props.dispatch(pushMessageCreateAction())
		console.log(props);
	}
	const updateMessageTextField = () => {
		props.dispatch(updateMessageTextFieldCreateAction(createMessageField.current.value))
	}
	return (
		<div className={s.Createmessage} >
			<textarea onChange={updateMessageTextField}
				className={s.textField} ref={createMessageField}
				value={props.messageText} placeholder='Введите сообщение' />
			<button onClick={pushMessage}>Опубликовать</button>
		</div>
	);
}


export default CreateMessage