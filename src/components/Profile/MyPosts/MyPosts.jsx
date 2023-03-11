import React from 'react';
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { createPostActionCreator, postTextChangeActionCreator } from './../../../redux/state';





export const MyPosts = (props) => {

	let postsElement = props.posts.map(p => <Post src={p.src} name={p.name} message={p.message} />)
	let createPostElement = React.createRef();
	const createPost = (e) => {
		e.preventDefault();
		props.dispatch(createPostActionCreator())
	}
	const postTextChange = () => {
		props.dispatch(postTextChangeActionCreator(createPostElement.current.value))
	}
	return (
		<div className={s.posts}>
			<h3 className={s.title}>Мои посты</h3>
			<form action='#' className={s.writePost}>
				<textarea ref={createPostElement} className={s.input} onChange={postTextChange} value={props.textPost} placeholder='Что у Вас нового?' />
				<button type='submit' className={s.postBtn} onClick={createPost} >Отправить</button>
			</form>

			{postsElement}

		</div>
	);
}
