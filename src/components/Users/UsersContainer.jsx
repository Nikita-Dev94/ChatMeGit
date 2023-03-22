import { connect } from 'react-redux';

import { followAC, setCurrentPageAC, totalCountAC, unfollowAC } from '../../redux/usersReducer';
import Users from './Users';
import { setUsersAC } from './../../redux/usersReducer';





let mapStateToProps = (state) => {


	// return {
	// 	users: state.usersPage.users,
	// 	totalUsers: state.usersPage.totalCount,
	// 	usersOnPage: 5,
	// 	currentPage: state.usersPage.currentPage,
	// 	isFetching: state.usersPage.isFetching
	// }

}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsersStore: (users) => {
			dispatch(setUsersAC(users))
		},
		setTotalCount: (totalCount) => {
			dispatch(totalCountAC(totalCount))
		},
		setCurrentPage: (page) => {
			dispatch(setCurrentPageAC(page))
		}
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer