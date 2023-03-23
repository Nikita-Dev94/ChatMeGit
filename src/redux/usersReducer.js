
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOTAL_COUNT = 'TOTAL_COUNT';
const CURRENT_PAGE = 'CURRENT_PAGE';


let initilState = {
	users: [],
	totalCount: 0,
	usersOnPage: 5,
	currentPage: 1,
	isFetching: false
}
const usersReducer = (state = initilState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (action.userId === u.id) {

						return { ...u, followed: true }
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (action.userId === u.id) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		case SET_USERS:
			return {
				...state,
				users: action.users
			}
		case TOTAL_COUNT:
			return {
				...state,
				totalCount: action.totalCount
			}
		case CURRENT_PAGE:
			return {
				...state,
				users: [],
				currentPage: action.currentPage
			}
		default:
			return state;
	}

}





export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const totalCountAC = (totalCount) => ({ type: TOTAL_COUNT, totalCount });
export const setCurrentPageAC = (currentPage) => ({ type: CURRENT_PAGE, currentPage });

export default usersReducer