import Input from "../../components/Input/Input";
import styles from "./styles.module.css";

function EditUser() {
  return (
    <>
      <h2 className={styles.title}>edit user</h2>
      <Input placeholder="Oleg Schevchenko" user="User" />
    </>
  );
}

export default EditUser;
