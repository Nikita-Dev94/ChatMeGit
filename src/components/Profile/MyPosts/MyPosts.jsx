import React from 'react';
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { useDispatch, useSelector } from 'react-redux';
import { addPost, updateTextPost } from '../../../redux/profileReducer';

const MyPosts = () => {

	const dispatch = useDispatch()
	const posts = useSelector(state => state.profilePage.posts)
	const textPost = useSelector(state => state.profilePage.textPost)



	const postsElement = posts.map(p => <Post key={p.id} src={p.src} name={p.name} message={p.message} />)
	const createPostElement = React.createRef();
	const createPostBtn = React.createRef();

	const createPost = (e) => {
		e.preventDefault();
		dispatch(addPost())
	}
	const postTextChange = () => {
		dispatch(updateTextPost(createPostElement.current.value))
	}
	return (
		<div className={s.posts}>
			<h3 className={s.title}>Мои посты</h3>
			<form action='#' className={s.writePost}>
				<textarea
					onChange={postTextChange} value={textPost}
					ref={createPostElement} className={s.input} placeholder='Что у Вас нового?' />
				<button onClick={createPost}
					ref={createPostBtn} type='submit' className={s.postBtn}  >Отправить</button>
			</form>

			{postsElement}

		</div>
	);
}

export default MyPosts