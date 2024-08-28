import Input from "../../components/Input/Input";
import styles from "./styles.module.css";
import UserInfo from "../../components/UserInfo/UserInfo";
import Layout from "../../components/Layout/Layout";

function EditUser() {
  return (
    <Layout>
      <h2 className={styles.title}>edit user</h2>
      <Input placeholder="Oleg Schevchenko" user="User" />
      <UserInfo />
    </Layout>
  );
}

export default EditUser;
