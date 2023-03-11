import React from 'react';
import s from "./CreateMessage.module.css";



const CreateMessage = (props) => {
	let createMessageField = React.createRef();

	const pushMessage = () => {

		props.dispatch({ type: 'SEND-MESSAGE' })
		console.log(props);


	}
	const updateMessageTextField = () => {
		props.dispatch({ type: 'UPDATE-MESSAGE-TEXT', updateTextMessage: createMessageField.current.value })


	}
	return (
		<div className={s.Createmessage} >
			<textarea className={s.textField} ref={createMessageField} onChange={updateMessageTextField} value={props.messageText} placeholder='Введите сообщение'>

			</textarea>
			<button onClick={pushMessage}>Опубликовать</button>
		</div>
	);
}


export default CreateMessage