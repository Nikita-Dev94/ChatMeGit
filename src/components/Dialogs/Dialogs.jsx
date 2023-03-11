import React from 'react';
import s from "./Dialogs.module.css";
import DialogAuthor from "./DialogAuthor/DialogAuthor";
import DialogField from './DialogField/DialogField';




const Dialogs = (props) => {

	let dialog = props.state.dialogs.map(d => <DialogAuthor id={d.id} author={d.author} />)
	return (

		<div className={s.dialogs}>
			<ul className={s.dialogsList}>
				{dialog}
			</ul>
			<DialogField messages={props.state.messages} messageText={props.state.messageText} dispatch={props.dispatch} />
		</div >

	);
}


export default Dialogs