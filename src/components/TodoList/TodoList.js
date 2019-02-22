import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../Task/Task';
import { addDialogHandler } from '../../store/actions/todoListActions';

import ReactTimeAgo from 'react-time-ago'
import ru from 'javascript-time-ago/locale/ru'



class TodoList extends Component {
	render() {
		console.log("список получаем ");
		return (
			<div className="TodoList">
				{this.props.todoList.tasks.map((item, index) => {
					return (
						<div className="border" key={index}>
							<Task id={item.id} name={item.name} description={item.description} date={item.date}/>


		

						</div>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
	toggleAddTaskDialog: () => dispatch(addDialogHandler())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
		/*<div className="ShowTask">
					<p>Имя автора:</p>
					<p>{this.props.todoList.showName}</p>
					<p>Текст сообщения:</p>
					<p className="desc">{this.props.todoList.showDescription}</p>
				</div>*/