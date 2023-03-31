import React, { useEffect } from 'react';
import s from "./Login.module.css";
import { useForm } from 'react-hook-form';
import { getMyInfo, postAuth } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { setMyInfo } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const Login = () => {
	const dispatch = useDispatch();
	const authMe = useSelector(state => state.auth)
	const { register,
		handleSubmit,
	} = useForm();

	const onSubmit = data => {
		postAuth(data)
			.then(res => {
				if (res.data.resultCode === 0) {
					getMyInfo()
						.then(data => {
							const { id, email, login } = data.data;
							dispatch(setMyInfo({ id, email, login }));
						})


				}
			})
	};

	if (authMe.isAuth) {
		return < Navigate to='/profile' />
	}


	return (
		<div >
			<form action="#" method="post" className={s.form} onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="email">
					Email
					<input className={s.input} type="email" name="email" id="email" {...register('email')} />
				</label>
				<label htmlFor="pass">
					Пароль
					<input className={s.input} type="password" name="pass" id="pass" {...register('password')} />
				</label>
				<label htmlFor="check">
					Запомнить меня
					<input className={s.input} type="checkbox" name="check" id="check" {...register('rememberMe')} />
				</label>
				<button type="submit">войти</button>
			</form>
		</div>
	);
}

export default Login