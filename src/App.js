import './App.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/Users/Users';
import { useEffect } from 'react';
import { getMyInfo } from './api/api';
import { useDispatch } from 'react-redux';
import { setMyInfo } from './redux/authReducer';
import RequireAuth from './hoc/auth';
import Login from './components/Login/Login';




const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		const checkAuth = async () => {
			const data = await getMyInfo()
			if (data.resultCode === 0) {
				const { id, email, login } = data.data
				dispatch(setMyInfo({ id, email, login }))
			}
		}
		checkAuth()
	}, [])
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
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
