import Input from "../../components/Input/Input";
import styles from "./styles.module.css";
import UserInfo from "../../components/UserInfo/UserInfo";

function EditUser() {
  return (
    <>
      <h2 className={styles.title}>edit user</h2>
      <Input placeholder="Oleg Schevchenko" user="User" />
      <UserInfo />
    </>
  );
}

export default EditUser;
