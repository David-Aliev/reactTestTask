import styles from "./style.module.css";
import Layout from "../../components/Layout/Layout";
import DropdownSelector from "../../components/DropDownButton/DropDownButton";
import countries from "../../data/countries";
import departments from "../../data/departments";
import statuses from "../../data/statuses";
import deleteButton from "../../assets/deleteFiltersBtn.png";
import { useFiltersContext } from "../../FiltersContext";
import FiltersCard from "../../components/FiltersCard/FiltersCard";

function UsersPage() {
  const { clearFilters } = useFiltersContext();

  return (
    <Layout>
      <h1 className={styles.title}>Users</h1>
      <p className={styles.subtitle}>
        Please add at least 3 departments to be able to proceed next steps.
      </p>
      <div className={styles.filters}>
        <DropdownSelector items={departments} placeholder="Select department" />
        <DropdownSelector items={countries} placeholder="Select country" />
        <DropdownSelector items={statuses} placeholder="All statuses" />
        <div className={styles.delete}>
          <button onClick={clearFilters} className={styles.delete_btn}>
            <img src={deleteButton} alt="deleteBtn" />
          </button>
        </div>
      </div>
      <FiltersCard />
    </Layout>
  );
}

export default UsersPage;
