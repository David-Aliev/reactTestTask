import styles from "./styles.module.css";

type inputProps = {
  user?: string;
  placeholder?: string;
};

function Input({ user, placeholder }: inputProps) {
  return (
    <div className={styles.input_container}>
      <span className={styles.user}>{user}</span>
      <input
        placeholder={`${placeholder}`}
        className={styles.input}
        type="text"
        required
      />
    </div>
  );
}

export default Input;
