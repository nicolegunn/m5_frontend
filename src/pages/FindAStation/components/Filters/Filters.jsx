import CheckboxGroup from "./CheckboxGroup/CheckboxGroup.jsx";
import ServicesDropdown from "./ServicesDropdown/ServicesDropdown.jsx";
import styles from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.checkboxGroupsContainer}>
        <CheckboxGroup
          title="Station type"
          options={["Truck stop", "Service station"]}
        />
        <CheckboxGroup
          title="Fuel type"
          options={["ZX Premium", "Z91 Unleaded", "Z Diesel"]}
        />
      </div>
      <ServicesDropdown />
    </div>
  );
}
