import { createSlice } from "@reduxjs/toolkit"

export const navbarReducer = createSlice({
	name: 'navbar',
	initialState: {
		currentPage: 1,
		usersOnPage: 3,
		friends: [

		]
	},
	reducers: {
		setFriends: (state, action) => {
			state.friends = action.payload
		},
	},
})

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { setFriends } = navbarReducer.actions

export default navbarReducer.reducer

