import styles from "./styles.module.css";
import { connect } from "react-redux";
import { deleteNote, minusNoteCount } from "../../redux/actions/noteAction";

function NoteItem({
  id,
  title,
  content,
  deleteNoteFromList,
  minusCountList,
  setModalOpen,
  setCurrentNoteId,
}) {
  function handleClick() {
    setCurrentNoteId(id);
    setModalOpen(true);
  }
  return (
    <div className={styles.noteItem_container}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className={styles.button_container}>
        <button onClick={handleClick} className={styles.note_btn}>
          Edit
        </button>
        <button
          onClick={() => {
            deleteNoteFromList(id);
            minusCountList();
          }}
          className={styles.note_btn}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNoteFromList: (id) => dispatch(deleteNote(id)),
    minusCountList: () => dispatch(minusNoteCount()),
  };
};
export default connect(null, mapDispatchToProps)(NoteItem);
