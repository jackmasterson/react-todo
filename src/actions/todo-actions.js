
import * as Types from '../types/todo-types.js';

export const toDoSubmitted = (val) => ({ type: Types.SUBMIT_TO_DO, payload: val });
export const toDoUpdated = (val) => ({ type: Types.UPDATE_TO_DO, payload: val });
export const selectionSubmitted = (val) => ({ type: Types.SELECT_TO_DO, payload: val });
export const updateList = (val) => ({ type: Types.UPDATE_LIST, payload: val });
export const editingOn = (val) => ({ type: Types.EDITING_ON, payload: val });
export const deleted = (val) => ({ type: Types.DELETE_TO_DO, payload: val });
export const crossedOff = (val) => ({ type: Types.CROSS_OFF_TO_DO, payload: val });
export const successfulSignOn = (val) => ({ type: Types.SUCCESSFUL_SIGN_ON, payload: val });
export const newUserFlow = (val) => ({ type: Types.NEW_USER_SIGN_ON, payload: val });
export const saveComplete = (val) => ({ type: Types.SAVE_COMPLETE, payload: val });