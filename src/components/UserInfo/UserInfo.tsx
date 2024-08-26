import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./styles.module.css";

function UserInfo() {
  return (
    <div className={styles.user__info}>
      <span className={styles.user__info_title}>User Information</span>
      <div className={styles.user__info_wrap}>
        <Input user="Full Name" placeholder="Oleg Schevchenko" />
        <Input user="Department" placeholder="Digital Marketingh" />
        <Input user="Country" placeholder="United Statesh" />
        <Input user="Status" placeholder="Activeh" />
      </div>
      <div className={styles.user__info_btns}>
        <Button width="medium" text="undo" />
        <Button width="large" text="save" />
      </div>
    </div>
  );
}

export default UserInfo;
