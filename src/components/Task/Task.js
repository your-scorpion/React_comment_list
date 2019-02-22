import React from 'react';
import {
	deleteTaskAction,
	showTaskAction,
	showButtonHandler,
	editDialogHandler
} from '../../store/actions/todoListActions';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';

var dateFormat = require('dateformat');
var now = new Date();
var date_for = (now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fsinishMyTask: false
		}
	}

	lineThru = () =>{
		this.setState({fsinishMyTask: !this.state.fsinishMyTask});
	}

	render() {
		console.log('кнопки рендерим');
		return (
			<div className="Task">
				<div className={this.props.fsinishMyTask !== true ? "task-left-column" : "task-left-column-done"} onClick={() => this.lineThru()}>
					<p> {this.props.name} <b>написал:</b>  {this.props.description}
					<b> в</b> {this.props.date} </p>


				</div>


				<div className="tdd">
					<Button
						label="читать весь комментарий"
						className="p-button-success"
						onClick={() => {
							this.props.showTask(this.props);
							this.props.toggleShowTask();
						}}
					/>
					<Button
						label="Отредактировать"
						className="p-button-text"
						onClick={() => {
							this.props.showTask(this.props);
							this.props.toggleEditDialogHandler();
						}}
					/>
					<Button
						label="Удалить"
						className="p-button-danger"
						onClick={() => this.props.deleteTask(this.props)}
					/>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	deleteTask: (payload) => dispatch(deleteTaskAction(payload)),
	showTask: (payload) => dispatch(showTaskAction(payload)),
	toggleShowTask: () => dispatch(showButtonHandler()),
	toggleEditDialogHandler: () => dispatch(editDialogHandler())
});

export default connect(null, mapDispatchToProps)(Task);
