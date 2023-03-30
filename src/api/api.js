import axios from "axios"

const pathApi = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (page, usersOnPage) => {
	return axios
		.get(`${pathApi}users?page=${page}&count=${usersOnPage}`,
			{ withCredentials: true }
		)
		.then(res => res.data)
}
export const getMyInfo = () => {

	return axios
		.get(`${pathApi}auth/me`, {
			withCredentials: true
		})
		.then(res => {
			return res.data
		})
}
export const getFriends = (currentPage, usersOnPage) => {
	return axios
		.get(`${pathApi}users?page=${currentPage}&count=${usersOnPage}`)
		.then(res => res.data)
}
export const getInfo = (locationUrl) => {
	return axios
		.get(`${pathApi}${locationUrl}`)
		.then(res => res.data)
}
export const setUnfollow = (id) => {
	return axios
		.delete(`${pathApi}follow/${id}`, {
			withCredentials: true,
			headers: {
				'API-KEY': 'e371de99-3ea6-4012-a1c0-f7b0f6db142b'
			}
		})
		.then(res => {
			return res.data
		})

}
export const setFollow = (id) => {
	return axios
		.post(`${pathApi}follow/${id}`, {}, {
			withCredentials: true,
			headers: {
				'API-KEY': 'e371de99-3ea6-4012-a1c0-f7b0f6db142b'
			}
		})
		.then(res => {
			return res.data
		})

}
export const getStatus = (id) => {

	return axios
		.get(`${pathApi}/profile/status/${id}`)
		.then(res => res.data);


}
export const putUpdateStatus = (status) => {
	return axios
		.put(`${pathApi}profile/status`, { status }, {
			withCredentials: true,
			headers: {
				'API-KEY': 'e371de99-3ea6-4012-a1c0-f7b0f6db142b'
			}
		})
}

export const postAuth = (data) => {
	const { email, password, rememberMe } = data
	debugger
	return axios
		.post(`${pathApi}auth/login`, { email, password, rememberMe })
}