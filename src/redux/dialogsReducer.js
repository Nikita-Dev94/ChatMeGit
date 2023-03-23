import { createSlice } from "@reduxjs/toolkit"


export const dialogsPage = createSlice({
	name: 'dialogsPage',
	initialState: {
		dialogs: [
			{
				id: 1,
				author: 'Вадим Епанчинцев'
			},
			{
				id: 2,
				author: 'Юрий Трубачев'
			},
			{
				id: 3,
				author: 'Андрей Разин'
			},
			{
				id: 4,
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
	},
	reducers: {
		updateMessageText: (state, action) => {
			state.messageText = action.payload
		},
		sendMessage: (state) => {
			let newMessage = {
				id: state.messages[state.messages.length - 1].id + 1,
				message: state.messageText
			}
			state.messages = [...state.messages, newMessage]
			state.messageText = ''
		}
	},
})

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { updateMessageText, sendMessage, } = dialogsPage.actions

export default dialogsPage.reducer