import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ddsds, addDialogHandler } from '../../store/actions/todoListActions';
import { generatIDfor_random_elem } from '../../store/reducers/todoListReducer';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';








class fiveAttempAbbtask extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tempName: '',
			tempDescription: '',
			tempDate: ''
		};
	}

	saveName = (e) => {
		this.setState({ tempName: e.target.value });
	};
// сохраняем введенные значения
	saveDescription = (e) => {
		this.setState({ tempDescription: e.target.value });
		console.log('сохраняем введенные значения описания');
	};

	saveDate = (e) => { 
		this.setState({ tempDate: new Date().toLocaleString() });
		console.log('сохраняем введенные значения даты' + new Date().toLocaleString() );
	};


	render() {
		return (
			<div className="fiveAttempAbbtask">
				<Dialog
					header="Напишите ваш комментарий"
					visible={this.props.todoList.addDialogVisible}
					onHide={this.props.toggleAddTaskDialog}
					>

					<p>Время:</p>
					<input type="text" size="40" placeholder="Нажмите для указания времени" onClick={this.saveDate} value={this.state.tempDate} />
					<br />

					<p>Имя:</p>
					<textarea onChange={this.saveName} value={this.state.tempName} maxLength={120} />
					<br />

					<p>Комментарий:</p>
					<textarea onChange={this.saveDescription} value={this.state.tempDescription} maxLength={400} />
					<br />





					{this.state.tempName !== '' ? (
						//разные состояния кнопок
						<Button
							label="Закинуть коммент"
							className="p-button-success"
							onClick={() => {
								this.props.addItem({
									id: generatIDfor_random_elem(),
									name: this.state.tempName,
									description: this.state.tempDescription,
									date: this.state.tempDate
								});
								this.setState({ id: '', tempName: '', tempDescription: '', tempDate: '' });
								this.props.toggleAddTaskDialog();
								// пустой шаблон для данных
								console.log({ id: '', tempName: '', tempDescription: '', tempDate: '' });
							}}
						/>
					) : (
						<Button
							label="Заполните поля"
							className="p-button-success"
							onClick={() => {
								this.props.addItem({
									id: generatIDfor_random_elem(),
									name: this.state.tempName,
									description: this.state.tempDescription,
									date: this.state.tempDate,
								});
								this.setState({ id: '', tempName: '', tempDescription: '', tempDate: ''  });
								this.props.toggleAddTaskDialog();
							}}
							disabled
						/>
					)}
				</Dialog>
			</div>
		);
	}
}

const dispatStackOverflow = (dispatch) => ({
	
	addItem: (payload) => dispatch(ddsds(payload)),
	toggleAddTaskDialog: () => dispatch(addDialogHandler())
});

const dataFromList = (state) => ({
	todoList: state.todoList
});

export default connect(dataFromList, dispatStackOverflow)(fiveAttempAbbtask);
