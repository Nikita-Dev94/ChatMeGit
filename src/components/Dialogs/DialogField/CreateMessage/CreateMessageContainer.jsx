
import { pushMessageCreateAction, updateMessageTextFieldCreateAction } from '../../../../redux/dialogsReducer';
import CreateMessage from './CreateMessage';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

	return {
		messageText: state.dialogsPage.messageText,
	}
}
let mapDispatchToProps = (dispatch) => {

	return {
		updateMessageTextField: (text) => {
			dispatch(updateMessageTextFieldCreateAction(text))
		},
		pushMessage: () => {
			dispatch(pushMessageCreateAction())
		}
	}
}

const CreateMessageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateMessage)

export default CreateMessageContainer