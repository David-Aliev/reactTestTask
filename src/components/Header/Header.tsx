import Button from "../Button/Button";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className="header__container">
      <div className={styles.buttons}>
        <Button width="large" isGray={true} text="Edit Users" />
        <Button width="large" text="Users" />
      </div>
    </div>
  );
}

export default Header;
