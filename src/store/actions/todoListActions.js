
export const ddsds = (payload) => ({ type: ADD_TASK, payload });
export const deleteTaskAction = (payload) => ({ type: DELETE_TASK, payload });
export const showTaskAction = (payload) => ({ type: SHOW_TASK, payload });
export const editTaskAction = (payload) => ({ type: EDIT_TASK, payload });
export const showButtonHandler = () => ({type: SHOW_BUTTON_HANDLER});
export const addDialogHandler = () => ({type: ADD_DIALOG_HANDLER});
export const editDialogHandler = () => ({type: EDIT_DIALOG_HANDLER});

















export const ADD_TASK = '[AddTask] Add task';
export const DELETE_TASK = '[DeleteTask] Delete task from list';
export const SHOW_TASK = 'SHOW TASK action';
export const EDIT_TASK = 'EDIT TASK action';
export const SHOW_BUTTON_HANDLER = 'Toogle visible on/off';
export const ADD_DIALOG_HANDLER = 'Toggle Add dialog on/off';
export const EDIT_DIALOG_HANDLER = 'Toggle Edit dialog on/off';


