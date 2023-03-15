import './App.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = (props) => {

	return (
		<BrowserRouter>
			<div className='wrapper'>
				<div className="app">
					<Header />
					<Nav state={props.state.navbar} />
					<div className='content'>
						<Routes >
							<Route path='/profile' element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
							<Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
