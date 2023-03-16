import React from 'react';
import { pushMessageCreateAction, updateMessageTextFieldCreateAction } from '../../../../redux/dialogsReducer';
import CreateMessage from './CreateMessage';

const CreateMessageContainer = (props) => {

	const pushMessage = () => {
		props.dispatch(pushMessageCreateAction())
	}

	const updateMessageTextField = (text) => {
		props.dispatch(updateMessageTextFieldCreateAction(text))
	}
	return (
		<CreateMessage updateMessageTextField={updateMessageTextField} messageText={props.messageText} pushMessage={pushMessage} />

	);
}


export default CreateMessageContainer