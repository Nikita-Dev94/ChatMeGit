
import { createSlice } from '@reduxjs/toolkit';

export const appReducer = createSlice({
	name: 'app',
	initialState: {
		initialized: false,
	},
	reducers: {
		initializing: (state) => {
			state.initialized = true
		}
	}
})

export const { initializing } = appReducer.actions

export default appReducer.reducer