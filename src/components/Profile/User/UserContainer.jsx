import React from 'react';
import User from "./User";
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
	return {
		keyData: state.profilePage.keyData,
	}
}

const UserContainer = connect(mapStateToProps)(User)

export default UserContainer


