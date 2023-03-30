
import { createSlice } from '@reduxjs/toolkit';
export const profileReducer = createSlice({
	name: 'profileReducer',
	initialState: {
		posts: [
			{
				id: 1,
				name: 'Ромик Жидковский',
				src: 'https://sun9-east.userapi.com/sun9-75/s/v1/ig2/F-lVfwgvqa0MI15zv1Ml3Nx_tWP-RwEYQu9-DRioHBzi75Dy7H-GKScsV8ORvI4Ylpu5IJ0hGxrt78ucPSPetLO5.jpg?size=200x200&quality=95&crop=171,0,914,914&ava=1',
				message: 'Начал изучать JS. Вообще ИМБА'
			},
			{
				id: 2,
				name: 'Борис Хрен-Попадешь',
				src: 'http://cdns.russiatoday.com/rbthmedia/images/2019.03/original/5c80f7b615e9f951a707eafd.jpg',
				message: 'Резкий, как удар серпом по яйцам, и жесткий, как удар молотом. Живой советский герб. Говорят, эту сволочь вообще невозможно убить.'
			}
		],
		textPost: '',
		keyData: [
			{
				title: 'Дата рождения',
				value: '31.01.94'
			},
			{
				title: 'Город',
				value: 'штат Нью-Хэмпшир'
			},
			{
				title: 'Любимая цитата',
				value: 'Она тебя сожрет! Палку! Палку давай! ААААА!'
			},
			{
				title: 'Сайт',
				value: 'ebanarama.xyu'
			},
		],
		profile: {
			photos: {
				small: '',
				large: ''
			},
			aboutMe: '',
		},
		status: 'test'
	},
	reducers: {
		updateTextPost: (state, action) => {
			state.textPost = action.payload
		},
		addPost: state => {
			let newPost = {
				id: state.posts[state.posts.length - 1].id + 1,
				message: state.textPost,
				src: 'https://avatars.mds.yandex.net/i?id=2833a2c235fd4df1ea316ad879a31b7a8fbd2a14-6472467-images-thumbs&n=13',
				name: 'Зубенко Михаил Петрович',
			}
			state.posts = [...state.posts, newPost]
			state.textPost = ''
		},
		setInfo: (state, action) => {
			state.profile = action.payload
		},
		setStatus: (state, action) => {
			state.status = action.payload
		},
		updateStatus: (state, action) => {
			state.status = action.payload
		}
	}
})

export const { updateTextPost, addPost, setInfo, setStatus, updateStatus } = profileReducer.actions


export default profileReducer.reducer

