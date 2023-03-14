import React from 'react';
import { createPostActionCreator, postTextChangeActionCreator } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';





export const MyPostsContainer = (props) => {

	const createPost = () => {
		props.dispatch(createPostActionCreator())
	}
	const postTextChange = (text) => {
		props.dispatch(postTextChangeActionCreator(text))
	}
	return (
		<MyPosts posts={props.posts} textPost={props.textPost} createPost={createPost} postTextChange={postTextChange} />
	);
}
