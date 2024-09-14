import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { editNote, setCurrentNot } from "../../redux/actions/noteAction";
import { connect } from "react-redux";

function Modal({
  setModalOpen,
  currentNoteId,
  setCurrentNot,
  currentNoteData,
  editNoteData,
}) {
  const [editNote, setEditNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setEditNote({ ...editNote, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    editNoteData(currentNoteId, editNote);
    setModalOpen(false);
  }

  useEffect(() => {
    setCurrentNot(currentNoteId);
    currentNoteData &&
      setEditNote({
        title: currentNoteData?.title,
        content: currentNoteData?.content,
      });
  }, []);

  useEffect(() => {
    currentNoteData &&
      setEditNote({
        title: currentNoteData?.title,
        content: currentNoteData?.content,
      });
  }, [currentNoteData]);
  return (
    <div className={styles.modal_container}>
      <div className={styles.body}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={editNote.title}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="content"
            placeholder="Content..."
            value={editNote.content}
            onChange={handleChange}
          />
          <button type="submit">Edit Note</button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentNoteData: state.currentNote,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentNot: (id) => dispatch(setCurrentNot(id)),
    editNoteData: (id, newEditData) => dispatch(editNote(id, newEditData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
