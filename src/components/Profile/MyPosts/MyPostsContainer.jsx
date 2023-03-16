import React from 'react';
import { createPostActionCreator, postTextChangeActionCreator } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';





let mapStateToProps = (state) => {

	return {
		posts: state.profilePage.posts,
		textPost: state.profilePage.textPost
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		createPost: () => {
			dispatch(createPostActionCreator())
		},
		postTextChange: (text) => {
			dispatch(postTextChangeActionCreator(text))
		}
	}
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer