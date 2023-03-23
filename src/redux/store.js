import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';
import usersReducer from './usersReducer';


let store = configureStore({
	reducer: {
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		navbar: navbarReducer,
		usersPage: usersReducer
	}
});
export default store;