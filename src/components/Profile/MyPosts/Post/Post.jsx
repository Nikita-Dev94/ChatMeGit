import React from 'react';
import s from "./Post.module.css";


export const Post = (props) => {
	return (
		<div className={s.item}>
			<img src={props.src} alt="Author Avatar" className={s.avatar} />
			<div className={s.postContent}>
				<h4 className={s.authorName}>{props.name}</h4>
				<p className={s.text}>{props.message}</p>
			</div>

		</div>
	);
}
