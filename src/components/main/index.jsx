import styles from "./styles.module.css";
import NoteForm from "../noteForm";
import NoteList from "../noteList";
import NoteCount from "../noteCount";

function Main() {
  return (
    <main className={styles.main_container}>
      <NoteCount />
      <NoteForm />
      <NoteList />
    </main>
  );
}

export default Main;
