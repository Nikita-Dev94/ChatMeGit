import './App.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/Users/Users';




const App = () => {

	return (
		<BrowserRouter>
			<div className='wrapper'>
				<div className="app">
					<Header />
					<Nav />
					<div className='content'>
						<Routes >
							<Route path='/profile/*' element={<Profile />} />
							<Route path='/dialogs/*' element={<Dialogs />} />
							<Route path='/users' element={<Users />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
