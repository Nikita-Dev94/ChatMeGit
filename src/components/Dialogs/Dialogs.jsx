import DialogField from './DialogField/DialogField';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {

	return {
		messages: state.dialogsPage.messages,
		messageText: state.dialogsPage.messageText,
		dialogs: state.dialogsPage.dialogs
	}
}

const Dialogs = connect(mapStateToProps)(DialogField)

export default Dialogs