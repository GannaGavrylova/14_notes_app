import { type } from "@testing-library/user-event/dist/type";

export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const PLUS = "PLUS";
export const MINUS = "MINUS";
export const EDAT_NOTE = "EDIT_NOTE";
export const SET_CURRENT_NOTE = "SET_CURRENT_NOT";

export const addNote = (noteData) => ({
  type: ADD_NOTE,
  payload: noteData,
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

export const plusNoteCount = () => ({
  type: PLUS,
});
export const minusNoteCount = () => ({
  type: MINUS,
});

export const editNote = (id, editNoteData) => ({
  type: EDAT_NOTE,
  payload: { id, editNoteData },
});

export const setCurrentNot = (id) => ({
  type: SET_CURRENT_NOTE,
  payload: id,
});
