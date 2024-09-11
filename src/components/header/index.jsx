import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header_container}>
      <h1 className={styles.header_title}>My Notes App</h1>
    </header>
  );
}

export default Header;
