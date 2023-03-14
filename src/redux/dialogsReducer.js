
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
let initilState = {
	dialogs: [
		{
			id: '1',
			author: 'Вадим Епанчинцев'
		},
		{
			id: '2',
			author: 'Юрий Трубачев'
		},
		{
			id: '3',
			author: 'Андрей Разин'
		},
		{
			id: '4',
			author: 'Даниил Вовченко'
		},
	],
	messages: [
		{
			id: 1,
			message: 'Здорова вадим'
		},
		{
			id: 2,
			message: 'Здорова Юрец'
		}
	],
	messageText: ''
}
const dialogsReducer = (state = initilState, action) => {
	if (action.type === SEND_MESSAGE) {
		let newMessage = {
			id: 3,
			message: state.messageText
		}
		state.messages.push(newMessage)
		state.messageText = ''
	} else if (action.type === UPDATE_MESSAGE_TEXT) {
		state.messageText = action.updateTextMessage;
	} else {
		return state
	}
	return state
}

export const pushMessageCreateAction = () => ({ type: SEND_MESSAGE });
export const updateMessageTextFieldCreateAction = (text) => ({ type: UPDATE_MESSAGE_TEXT, updateTextMessage: text });

export default dialogsReducer