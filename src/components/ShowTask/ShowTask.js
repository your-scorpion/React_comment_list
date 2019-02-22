import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { showButtonHandler } from '../../store/actions/todoListActions';

class ShowTask extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log('показать комментарий сработало');
		return (
			<Dialog header={`${this.props.todoList.showName}`} visible={this.props.todoList.showTaskVisible} width="80%" modal={true} onHide={this.props.toggleShowTask}>
				<div className="ShowTask">
					<p>Имя автора:</p>
					<p>{this.props.todoList.showName}</p>
					<p>Текст сообщения:</p>
					<p className="desc">{this.props.todoList.showDescription}</p>
				</div>
			</Dialog>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
	toggleShowTask: () => dispatch(showButtonHandler())
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowTask);
