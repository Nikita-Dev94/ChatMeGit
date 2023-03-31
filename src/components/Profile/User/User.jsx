import React, { useState, useEffect } from 'react';
import s from "./User.module.css";
import Avatar from "./Avatar/Avatar";
import { useSelector, useDispatch } from 'react-redux';
import { setInfo, setStatus, updateStatus } from '../../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import { getInfo, getStatus, putUpdateStatus } from '../../../api/api';
import defaultURL from '../../../img/deafult.png';

const User = () => {
	const profile = useSelector(state => state.profilePage.profile)
	const name = useSelector(state => state.profilePage.profile.fullName)
	const avatarURL = useSelector(state => state.profilePage.profile.photos.large)
	const authId = useSelector(state => state.auth.id)
	const status = useSelector(state => state.profilePage.status)
	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		getStatus(id || authId)
			.then(data => dispatch(setStatus(data)))
		getInfo(`profile/${id || authId}`)
			.then(data => {

				dispatch(setInfo(data))
			})
	}, [])

	const updateStatusText = () => {
		dispatch(updateStatus(inputStatus.current.value))
	}




	const [editMode, setState] = useState(false);
	const inputStatus = React.createRef()
	return (
		<div className={s.user}>
			<Avatar src={!avatarURL ? defaultURL : avatarURL} />
			<div className={s.info}>
				<h2 className={s.titleName}>{name}</h2>
				<ul className={s.about}>
					<li><p>Статус:</p>{
						!editMode &&
						<p onDoubleClick={() => {
							setState(true)
						}}>{status}</p >
					}

						{editMode &&
							<textarea
								ref={inputStatus}
								autoFocus={true} value={status}
								name="status" id="status"
								className={s.status} rows="1"
								onBlur={() => {
									setState(false)
									putUpdateStatus(status)
								}}
								onChange={updateStatusText} />
						}
					</li>
					<li>В поисках работы: {profile.lookingForAJob ? <span>да</span> : <span>нет</span>}</li>
					<li>Стэк: {profile.lookingForAJobDescription}</li>
					<li>Контакты для связи:
						<ul>
							<li> {<a href={profile.contacts.vk}>Вконтакте</a>}</li>
							<li> {<a href={profile.contacts.github}>Гитхаб</a>}</li>
							<li> {<a href={profile.contacts.youtube}>Ютуб</a>}</li>
							<li> {<a href={profile.contacts.facebook}>Facebook</a>}</li>
							<li> <a href="https://t.me/perikosa">Телеграмм разработчика</a></li>
						</ul>
					</li>
				</ul>
				<div>



				</div>

			</div>

		</div >
	);


}



export default User
