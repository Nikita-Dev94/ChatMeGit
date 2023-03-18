
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initilState = {
	users: [
		{
			id: '1',
			fullName: {
				name: 'Вадим',
				secondName: 'Епанчинцев'
			},
			location: {
				country: "Россия",
				city: 'Череповец'
			},
			status: 'Я не обижаюсь я делаю выводы',
			followed: false,
			avatarURL: 'http://www.centericecollectibles.com/scans/162414e.jpg'
		},
		{
			id: '2',
			fullName: {
				name: 'Жека',
				secondName: 'Быстроходов'
			},
			location: {
				country: "Россия",
				city: 'Челябинск'
			},
			status: 'Палку! Палку дайте!',
			followed: false,
			avatarURL: 'https://i.ytimg.com/vi/7pVc5TK6MI4/maxresdefault.jpg'
		},
		{
			id: '3',
			fullName: {
				name: 'Данила',
				secondName: 'Багров'
			},
			location: {
				country: "Россия",
				city: 'Санкт-Петербург'
			},
			status: 'Да ладно, чо ты',
			followed: true,
			avatarURL: 'https://s16.stc.yc.kpcdn.net/share/i/4/2493274.jpg'
		},
	]
}
const usersReducer = (state = initilState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (action.userId === u.id) {
						return { ...u, followed: true }
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (action.userId === u.id) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		default:
			return state;
	}
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export default usersReducer