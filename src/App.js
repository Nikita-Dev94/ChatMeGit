import './App.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = (props) => {
	console.log(props);
	return (
		<BrowserRouter>
			<div className="app">
				<Header />
				<Nav state={props.state.navBar} />
				<div className='content'>
					<Routes >
						<Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} updatePost={props.updatePost} />} />
						<Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} sendMessage={props.sendMessage} updateMessageText={props.updateMessageText} />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
