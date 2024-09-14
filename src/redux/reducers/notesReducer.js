import noteList from "../../components/noteList";
import {
  ADD_NOTE,
  DELETE_NOTE,
  PLUS,
  MINUS,
  SET_CURRENT_NOTE,
  EDAT_NOTE,
} from "../../redux/actions/noteAction";

const initialState = {
  noteList: [],
  noteCount: 0,
  currentNote: null,
};
const noteReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  if (type === ADD_NOTE) {
    return {
      ...state,
      noteList: [
        ...state.noteList,
        payload,
        // {
        //   id: payload.id,
        //   title: payload.title,
        //   content: payload.content, //можем payload не разварачивать
        // },
      ],
    };
  }
  if (type === DELETE_NOTE) {
    return {
      ...state,
      noteList: state.noteList.filter((note) => note.id !== payload),
    };
  }
  if (type === PLUS) {
    return { ...state, noteCount: state.noteCount + 1 };
  }
  if (type === MINUS) {
    return { ...state, noteCount: state.noteCount - 1 };
  }
  if (type === SET_CURRENT_NOTE) {
    return {
      ...state,
      currentNote: state.noteList.find((note) => note.id === payload),
    };
  }
  if (type === EDAT_NOTE) {
    return {
      ...state,
      noteList: state.noteList.map((note) => {
        if (note.id === payload.id) {
          return {
            ...note,
            title: payload.editNoteData.title,
            content: payload.editNoteData.content,
          };
        }
        return note;
      }),
    };
  }

  return state;
};

export default noteReducer;

// {
//     id: Number
//     date: Date
//     title: String
//     content: String
// }
