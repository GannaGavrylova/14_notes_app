import styles from "./styles.module.css";

import { connect } from "react-redux";

function NoteCount({ noteCount }) {
  return (
    <div className={styles.count_container}>
      <h1>Count: {noteCount} </h1>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    noteCount: state.noteCount,
  };
};

export default connect(mapStateToProps)(NoteCount);
