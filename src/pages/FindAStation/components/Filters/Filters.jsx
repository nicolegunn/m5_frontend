import { useState, useEffect} from "react";
import CheckboxGroup from "./CheckboxGroup/CheckboxGroup.jsx";
import ServicesDropdown from "./ServicesDropdown/ServicesDropdown.jsx";
import styles from "./Filters.module.css";

export default function Filters({ fetchStations }) {
  const [stationType, setStationType] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    fetchStations({ stationType, fuelTypes, selectedServices });
  }, [stationType, fuelTypes, selectedServices]);

  const handleApplyFilters = () => {
    fetchStations({ stationType, fuelTypes, selectedServices });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.checkboxGroupsContainer}>
        <CheckboxGroup
          title="Station type"
          options={["Truck stop", "Service station"]}
          onChange={setStationType}
        />
        <CheckboxGroup
          title="Fuel type"
          options={["ZX Premium", "Z91 Unleaded", "Z Diesel"]}
          onChange={setFuelTypes}
        />
      </div>
      <ServicesDropdown onServiceSelection={setSelectedServices} onApplyFiltersButtonClick={ handleApplyFilters} />
    </div>
  );
}
