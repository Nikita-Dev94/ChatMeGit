
import { createSlice } from '@reduxjs/toolkit';

export const authReducer = createSlice({
	name: 'auth',
	initialState: {
		id: null,
		email: null,
		login: null
	},
	reducers: {
		setMyInfo: (state, action) => {
			let { id, email, login } = action.payload
			return state = { id, email, login }

		}
	}
})

export const { setMyInfo } = authReducer.actions

export default authReducer.reducer