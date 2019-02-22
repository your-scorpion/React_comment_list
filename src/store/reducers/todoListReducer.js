import * as Todomyvar_3 from '../actions/todoListActions';

export const generatIDfor_random_elem = () => {
	return '_' + Math.random().toString(36).substr(2, 9);
};
//дефолтная таска
const initialState = {
	tasks: [
		{
			id: generatIDfor_random_elem(),
			name: 'Цветков Максим',
			description: 'Ужасная система этот ваш react, голова кипит',
			date: '2/13/2019, 9:29:46 AM'
		}
	],
	showName: '',
	showDescription: '',
	showDate: '',
	editedItemId: ''
};

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case Todomyvar_3.ADD_TASK: {
			const task = { id: generatIDfor_random_elem(), name: action.payload.name, description: action.payload.description, date: action.payload.date };
			return { ...state, tasks: [ ...state.tasks, task ] };
		}
		case Todomyvar_3.DELETE_TASK: {
			return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload.id) };
		}
		case Todomyvar_3.SHOW_TASK: {
			return {
				...state,
				showName: action.payload.name,
				showDescription: action.payload.description,
				showDate: action.payload.date,
				editedItemId: action.payload.id
			};
		}
		case Todomyvar_3.EDIT_TASK: {
			return {
				...state,
				tasks: state.tasks.map(
					(task) =>
						task.id === state.editedItemId
							? { ...task, name: action.payload.name, description: action.payload.description, date: action.payload.date }
							: task
				)
			};
		}
		case Todomyvar_3.SHOW_BUTTON_HANDLER: {
			return { ...state, showTaskVisible: !state.showTaskVisible };
		}
		case Todomyvar_3.ADD_DIALOG_HANDLER: {
			return { ...state, addDialogVisible: !state.addDialogVisible };
		}
		case Todomyvar_3.EDIT_DIALOG_HANDLER: {
			return { ...state, editDialogVisible: !state.editDialogVisible };
		}

		default: {
			return state;
		}
	}
}
