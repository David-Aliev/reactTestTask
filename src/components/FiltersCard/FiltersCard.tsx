import styles from "./styles.module.css";
import deleteButton from "../../assets/deleteFiltersBtn.png";

function FiltersCard() {
  return (
    <table className={styles.filters__container}>
      <thead className={styles.filters__info}>
        <tr>
          <th className={styles.filters__info_title}>Full Name</th>
          <th className={styles.filters__info_title}>Department</th>
          <th className={styles.filters__info_spacer}></th>
          <th className={styles.filters__info_title}>Country</th>
          <th className={styles.filters__info_title}>Status</th>
        </tr>
      </thead>
      <tbody className={styles.filters__users}>
        <tr>
          <td className={styles.filters__users_title}>Andrey Olishchuck</td>
          <td className={styles.filters__users_text}>Digital marketing</td>
          <td className={styles.filters__info_spacer}></td>
          <td className={styles.filters__users_text}>Ukraine</td>
          <td className={styles.filters__users_text}>Active</td>
          <td className={styles.filters__image_container}>
            <img
              className={styles.filters__users_btn}
              src={deleteButton}
              alt="deleteButton"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default FiltersCard;
