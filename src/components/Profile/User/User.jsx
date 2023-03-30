import React, { useState, useEffect } from 'react';
import s from "./User.module.css";
import Key from "./Key/Key";
import Avatar from "./Avatar/Avatar";
import { useSelector, useDispatch } from 'react-redux';
import { setInfo, setStatus, updateStatus } from '../../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import { getInfo, getStatus, putUpdateStatus } from '../../../api/api';


const User = () => {
	const keyData = useSelector(state => state.profilePage.keyData)
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

	const keysElement = keyData.map(k => <Key key={k.title} title={k.title} value={k.value} />)



	const [editMode, setState] = useState(false);
	const inputStatus = React.createRef()
	return (
		<div className={s.user}>
			<Avatar src={!avatarURL ? 'https://sun9-77.userapi.com/impf/c855128/v855128722/b33b2/k7N1ayRH_vo.jpg?size=1280x720&quality=96&sign=1c06a97749667926dab18bb8153b1a96&c_uniq_tag=b1Om0LVHhG6dcuDSaUevwn2DALnrsq4Z6RqoJdnIG9g&type=album' : avatarURL} />
			<div className={s.info}>
				<h2 className={s.titleName}>{name}</h2>
				<ul className={s.about}>
					{keysElement}
				</ul>
				<div>

					{
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


				</div>

			</div>

		</div >
	);


}



export default User
