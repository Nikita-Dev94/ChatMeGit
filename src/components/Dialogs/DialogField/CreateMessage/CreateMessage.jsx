import React from 'react';
import s from "./CreateMessage.module.css";

const CreateMessage = (props) => {
	console.log(props);
	let createMessageField = React.createRef();

	const pushMessage = () => {
		props.pushMessage()
	}
	const updateMessageText = () => {
		props.updateMessageTextField(createMessageField.current.value)
	}
	return (
		<div className={s.Createmessage} >
			<textarea
				onChange={updateMessageText} value={props.messageText}
				className={s.textField} placeholder='Введите сообщение' ref={createMessageField} />
			<button onClick={pushMessage}>Опубликовать</button>
		</div>
	);
}


export default CreateMessage