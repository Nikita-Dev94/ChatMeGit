

let store = {
	_state: {
		profilePage: {
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
		},
		dialogsPage: {
			dialogs: [
				{
					id: '1',
					author: 'Вадим Епанчинцев'
				},
				{
					id: '2',
					author: 'Юрий Трубачев'
				},
				{
					id: '3',
					author: 'Андрей Разин'
				},
				{
					id: '4',
					author: 'Даниил Вовченко'
				},
			],
			messages: [
				{
					id: 1,
					message: 'Здорова вадим'
				},
				{
					id: 2,
					message: 'Здорова Юрец'
				}
			],
			messageText: ''
		},
		navBar: {
			friends: [
				{
					id: 1,
					name: "Ромик Жидковский",
					src: 'https://sun9-east.userapi.com/sun9-75/s/v1/ig2/F-lVfwgvqa0MI15zv1Ml3Nx_tWP-RwEYQu9-DRioHBzi75Dy7H-GKScsV8ORvI4Ylpu5IJ0hGxrt78ucPSPetLO5.jpg?size=200x200&quality=95&crop=171,0,914,914&ava=1'
				},
				{
					id: 2,
					name: "Борис Хрен Попадешь",
					src: 'http://cdns.russiatoday.com/rbthmedia/images/2019.03/original/5c80f7b615e9f951a707eafd.jpg'
				},
				{
					id: 3,
					name: "Илья Грандмастер-Бит",
					src: 'https://cdn-icons-png.flaticon.com/512/560/560277.png'
				},

			]
		}
	},
	getState() {
		return this._state
	},
	_callSubscriber() {
		console.log("State Changed");
	},
	subscribe(observer) {
		this._callSubscriber = observer; // observer - наблюдатель
	},
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 3,
				message: this._state.profilePage.textPost,
				src: 'https://avatars.mds.yandex.net/i?id=2833a2c235fd4df1ea316ad879a31b7a8fbd2a14-6472467-images-thumbs&n=13',
				name: 'Зубенко Михаил Петрович',
			}
			this._state.profilePage.posts.push(newPost)
			this._callSubscriber(this._state)
			this._state.profilePage.textPost = ''

		} else if (action.type === 'UPDATE-POST-TEXT') {
			this._state.profilePage.textPost = action.updateTextPost;
			this._callSubscriber(this._state)
		} else if (action.type === 'SEND-MESSAGE') {
			let newMessage = {
				id: 3,
				message: this._state.dialogsPage.messageText
			}
			this._state.dialogsPage.messages.push(newMessage)
			this._callSubscriber(this._state)
			this._state.dialogsPage.messageText = ''
		} else if (action.type === 'UPDATE-MESSAGE-TEXT') {
			this._state.dialogsPage.messageText = action.updateTextMessage;
			this._callSubscriber(this._state)
		}
	}

}

window.store = store;

export default store






