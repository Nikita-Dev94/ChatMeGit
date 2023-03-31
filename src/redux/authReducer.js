
import { createSlice } from '@reduxjs/toolkit';

export const authReducer = createSlice({
	name: 'auth',
	initialState: {
		id: null,
		email: null,
		login: null,
		smallPhoto: null,
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
		},
		delMyInfo: (state) => {
			return state = { id: null, email: null, login: null, isAuth: false }
		},
		setMyPhoto: (state, action) => {
			return state = { ...state, smallPhoto: action.payload }
		}
	}
})

export const { setMyInfo, delMyInfo, setMyPhoto } = authReducer.actions

export default authReducer.reducer