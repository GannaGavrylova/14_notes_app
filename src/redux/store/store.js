import { createStore } from "redux";
import noteReducer from "../reducers/notesReducer";

const store = createStore(noteReducer);

export default store;
