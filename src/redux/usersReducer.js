import { createSlice } from '@reduxjs/toolkit';


export const usersPage = createSlice({
	name: 'usersPage',
	initialState: {
		users: [],
		totalCount: 0,
		usersOnPage: 5,
		currentPage: 1,
		isFetching: false
	},
	reducers: {
		setTotalCount: (state, action) => {
			state.totalCount = action.payload
		},
		setCurrentPage: (state, action) => {
			state.users = []
			state.currentPage = action.payload
		},
		setUsers: (state, action) => {
			state.users = action.payload
		},
		follow: (state, action) => {
			state.users = state.users.map((u) => {
				if (u.id === action.payload) {
					u.followed = true
				}
				return u
			})

		},
		unfollow: (state, action) => {
			state.users = state.users.map((u) => {
				if (u.id === action.payload) {
					u.followed = false
				}
				return u
			})

		},

	}
})


export const { setTotalCount, setCurrentPage, setUsers, follow, unfollow } = usersPage.actions

export default usersPage.reducer