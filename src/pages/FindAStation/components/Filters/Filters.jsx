import { useState, useEffect } from "react";
import CheckboxGroup from "./CheckboxGroup/CheckboxGroup.jsx";
import ServicesDropdown from "./ServicesDropdown/ServicesDropdown.jsx";
import styles from "./Filters.module.css";

export default function Filters({ fetchStations }) {
  const [stationType, setStationType] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(true);

  useEffect(() => {
    fetchStations({ stationType, fuelTypes, selectedServices });
  }, [stationType, fuelTypes, selectedServices]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setFiltersOpen(false);
      } else {
        setFiltersOpen(true);
      }
    };

    // Set initial state based on current window size
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleApplyFilters = () => {
    fetchStations({ stationType, fuelTypes, selectedServices });
  };

  return (
    <>
      <div
        className={styles.toggleAllFilters}
        onClick={() => setFiltersOpen(!filtersOpen)}
      >
        <span>All Filters</span>{" "}
        <span className={`${styles.dropdownArrow} ${filtersOpen && styles.arrowUp}`}></span>
      </div>
      {filtersOpen && (
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
          <ServicesDropdown
            onServiceSelection={setSelectedServices}
            onApplyFiltersButtonClick={handleApplyFilters}
          />
        </div>
      )}
    </>
  );
}
