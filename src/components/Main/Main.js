import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import AddTask from '../AddTask/AddTask';
import ShowTask from '../ShowTask/ShowTask';
import EditTask from '../EditTask/EditTask';
import AddTaskButton from '../AddTaskButton/AddTaskButton';

class Main extends Component {
	render() {
		return (
				<div className="Main">
					<TodoList/>
					<br />
					<AddTask />
					<ShowTask />
					<EditTask />
					<AddTaskButton />
				</div>
		);
	}
}

export default Main;
