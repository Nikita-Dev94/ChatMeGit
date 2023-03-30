
import { createSlice } from '@reduxjs/toolkit';

export const authReducer = createSlice({
	name: 'auth',
	initialState: {
		id: null,
		email: null,
		login: null,
		isAuth: false
	},
	reducers: {
		setMyInfo: (state, action) => {
			let { id, email, login } = action.payload
			if (id !== null) {
				return state = { id, email, login, isAuth: true }
			} else {
				return state
			}
		}
	}
})

export const { setMyInfo } = authReducer.actions

export default authReducer.reducer