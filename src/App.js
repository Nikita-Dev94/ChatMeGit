import './App.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/Users/Users';
import { useEffect } from 'react';
import { getMyInfo, getUserInfo } from './api/api';
import { useDispatch, useSelector } from 'react-redux';
import { setMyInfo, setMyPhoto } from './redux/authReducer';
import RequireAuth from './hoc/auth';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import { initializing } from './redux/appReducer';



const App = () => {
	const dispatch = useDispatch()
	const test = useSelector(state => state.app.initialized)
	useEffect(() => {
		const checkAuth = async () => {
			const data = await getMyInfo()
			if (data.resultCode === 0) {
				const { id, email, login } = data.data
				dispatch(setMyInfo({ id, email, login }))
				dispatch(initializing())
				const getMyPhoto = async () => {
					const data = await getUserInfo(id)
					dispatch(setMyPhoto(data.photos.small))
				}
				getMyPhoto()
			}
		}
		checkAuth()
	}, [])
	if (!test) {
		return <div> <img src='https://loading.io/asset/647514' alt='preloader' /></div>
	}
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<div className="app">
					<Header />
					<Nav />
					<div className='content'>
						<Routes>
							<Route path='/profile/:id' element={<Profile />} />
							<Route path='/profile' element={
								<RequireAuth>
									<Profile />
								</RequireAuth>
							} />
							<Route path='/dialogs/*' element={
								<RequireAuth>
									<Dialogs />
								</RequireAuth>} />
							<Route path='/users' element={<Users />} />
							<Route path='/login' element={<Login />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
