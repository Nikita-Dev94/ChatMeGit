import React from 'react';
import s from "./CreateMessage.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { updateMessageText, sendMessage } from '../../../../redux/dialogsReducer';

const CreateMessage = () => {

	const dispatch = useDispatch()
	const messageText = useSelector(state => state.dialogsPage.messageText)


	let createMessageField = React.createRef();

	const pushMessage = () => {
		dispatch(sendMessage())
	}
	const updateMessage = () => {
		dispatch(updateMessageText(createMessageField.current.value))

	}
	return (
		<div className={s.Createmessage} >
			<textarea
				onChange={updateMessage} value={messageText}
				className={s.textField} placeholder='Введите сообщение' ref={createMessageField} />
			<button onClick={pushMessage}>Опубликовать</button>
		</div>
	);
}


export default CreateMessage