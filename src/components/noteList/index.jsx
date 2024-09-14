import styles from "./styles.module.css";
import { connect } from "react-redux";
import NoteItem from "../noteItem/index";
import Modal from "../modal";
import { useState } from "react";

function NoteList({ noteList }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState(null);

  if (noteList.length === 0)
    return <p className={styles.dont_list}>You don't have any notes</p>;
  return (
    <div className={styles.list_container}>
      {noteList.map((note) => {
        return (
          <NoteItem
            key={note.id}
            {...note}
            setCurrentNoteId={setCurrentNoteId}
            setModalOpen={setModalOpen}
          />
        );
      })}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} currentNoteId={currentNoteId} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  noteList: state.noteList,
});
export default connect(mapStateToProps)(NoteList);
