import { useState } from "react";
import styles from "./styles.module.css";
import { addNote, plusNoteCount } from "../../redux/actions/noteAction";
import { connect } from "react-redux";

function NoteForm({ addNoteToList, plusCountList, noteCount }) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote({ ...note, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNoteToList({
      ...note,
      // id: Math.random,
      id: new Date().getTime().toString(),
    });
    setNote({ title: "", content: "" });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      <input
        value={note.title}
        type="text"
        name="title"
        required
        placeholder="title"
        onChange={handleChange}
      />
      <textarea
        value={note.content}
        name="content"
        placeholder="Content..."
        required
        onChange={handleChange}
      />
      <button onClick={plusCountList} type="sudmit">
        Add Note
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    noteCount: state.noteCount,
  };
};
// функция которая отправляет пропсы
const mapDispatchTOProps = (dispatch) => {
  return {
    addNoteToList: (noteData) => dispatch(addNote(noteData)), // addNoteToList - пропс
    plusCountList: () => dispatch(plusNoteCount()),
  };
};

export default connect(mapStateToProps, mapDispatchTOProps)(NoteForm);
