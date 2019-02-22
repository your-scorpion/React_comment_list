import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { editTaskAction, editDialogHandler } from '../../store/actions/todoListActions';
import { Button } from 'primereact/button';



class EditTask extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newName: '',
			newDescription: ''
		};
	}

	saveName = (e) => {
		this.setState({ newName: e.target.value });
	};

	saveDescription = (e) => {
		this.setState({ newDescription: e.target.value });
	};

	render() {
		return (
			<div className="EditTask">
				<Dialog
					header={`Редактирование комментария ${this.props.todoList.showName}`}
					visible={this.props.todoList.editDialogVisible}
					width="80%"
					modal={true}
					onHide={this.props.toggleEditDialogHandler}
					>
					<p>Имя автора</p>
					<input onChange={this.saveName} maxLength={70} value={this.props.todoList.showName}/>



					<p>Измените текст сообщения</p>
					<textarea onChange={this.saveDescription} maxLength={400} value={this.props.showDescription}/>
					<br />

				{/*кнопка*/}
					
						<Button
							label="Изменить комментарий (дата будет обновлена тоже)"
							onClick={() => {
								this.props.editTask({
									name: this.props.todoList.showName,
									description: this.state.newDescription,
									date: Date().toLocaleString()
								});
							}}
						/>


				</Dialog>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
	editTask: (payload) => dispatch(editTaskAction(payload)),
	toggleEditDialogHandler: () => dispatch(editDialogHandler())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
