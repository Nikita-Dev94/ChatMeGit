import React from 'react';
import s from "./CreateMessage.module.css";



const CreateMessage = (props) => {
	let createMessageField = React.createRef();

	const pushMessage = () => {
		props.sendMessage()
	}
	const updateMessageTExtField = () => {
		props.updateMessageText(createMessageField.current.value)

	}
	return (
		<div className={s.Createmessage} >
			<textarea className={s.textField} ref={createMessageField} onChange={updateMessageTExtField} value={props.messageText} placeholder='Введите сообщение'>

			</textarea>
			<button onClick={pushMessage}>Опубликовать</button>
		</div>
	);
}


export default CreateMessage