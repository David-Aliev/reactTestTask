import styles from "./style.module.css";
import Layout from "../../components/Layout/Layout";
import DropdownSelector from "../../components/DropDownButton/DropDownButton";
import countries from "../../data/countries";
import departments from "../../data/departments";
import statuses from "../../data/statuses";
function UsersPage() {
  return (
    <Layout>
      <h1 className={styles.title}>Users</h1>
      <p className={styles.subtitle}>
        Please add at least 3 departmetns to be able to proceed next steps.
      </p>
      <div className={styles.filters}>
        <DropdownSelector
          items={departments}
          placeholder="Select departament"
        />
        <DropdownSelector items={countries} placeholder="Select country" />
        <DropdownSelector items={statuses} placeholder="All statuses" />
      </div>
    </Layout>
  );
}

export default UsersPage;
