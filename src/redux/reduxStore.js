import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';


let store = configureStore({
	reducer: {
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		navbar: navbarReducer
	}
});

export default store;