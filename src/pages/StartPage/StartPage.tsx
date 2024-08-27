import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function StartPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.startPage}>
        <div className={styles.welcome}>
          <h1>Welcome!</h1>
          <p className={styles.subheading}>I'm glad to have you here.</p>
        </div>
        <div className={styles.btns}>
          <Link to="/EditUserPage">
            <button className={styles.button}>Go to Edit Users page</button>
          </Link>
          <Link to="/UserPage">
            <button className={styles.button}>Go to Users page</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
