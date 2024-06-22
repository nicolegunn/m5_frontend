import { useState } from "react";
import styles from "./ServicesDropdown.module.css";
import { services, keyServices } from "./services.js";

export default function ServicesDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const toggleNestedDropdown = (service) => {
    setIsNestedDropdownOpen((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  // Remove one service from selectedServices array
  const handleRemoveService = (service) => {
    setSelectedServices((prev) =>
      prev.filter((s) => s.serviceFullName !== service.serviceFullName)
    );
  };

  // Remove all services from selectedServices array
  const handleRemoveAllServices = () => {
    setSelectedServices([]);
  };

  // Toggle selected service in/out of selectedServices array
  const toggleSelectService = (serviceFullName) => {
    // Find the selected service object from the services array using the short name
    const selectedService = services.find(
      (s) => s.serviceFullName === serviceFullName
    );
    // Create an object with the short name and full name of the selected service
    const serviceObj = {
      serviceShortName: selectedService.serviceShortName,
      serviceFullName: selectedService.serviceFullName,
    };
    // Update the selectedServices state
    setSelectedServices(
      (prev) =>
        prev.find((s) => s.serviceFullName === serviceObj.serviceFullName) // Check if the service is already selected
          ? prev.filter((s) => s.serviceFullName !== serviceObj.serviceFullName) // If selected, remove it from the list
          : [...prev, serviceObj] // If not selected, add it to the list
    );
  };

  const handleTooltipClick = (e, service) => {
    e.stopPropagation();
    alert(`Information about ${service}`);
  };

  return (
    <div className={styles.servicesDropdown}>
      <h3 className={styles.title}>Filter by services</h3>
      {/* inputContainer, dropdownMenu & ovalButtons container wrapped in this flex container so can align vertically */}
      <div className={styles.flexColumnWrapper}>
        <div className={styles.inputContainer}>
          <div
            className={`${styles.dropdownInput} ${
              isDropdownOpen ? styles.dropdownOpen : ""
            }`}
            onClick={toggleDropdown}
          >
            {/* Smaller box inside the input box that holds the selected oval shapes */}
            <div className={styles.selectedServices}>
              {selectedServices.length === 0 && (
                <span className={styles.placeholder}>Select service(s)</span>
              )}
              {selectedServices.map((service) => (
                <div
                  key={service.serviceFullName}
                  className={styles.selectedService}
                >
                  {service.serviceShortName}
                  <span
                    className={styles.removeServiceX}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveService(service);
                    }}
                  >
                    ×
                  </span>
                </div>
              ))}
            </div>
            {selectedServices.length > 0 && (
              <button
                className={styles.removeAllServicesX}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveAllServices();
                }}
              >
                ×
              </button>
            )}
            {isDropdownOpen && (
              <button
                className={styles.closeDropdownX}
                onClick={toggleDropdown}
              >
                ×
              </button>
            )}
            <span className={styles.dropdownArrow}></span>
          </div>
        </div>

        {isDropdownOpen && (
          <ul className={styles.dropdownMenu}>
            {services.map((service) => (
              <li
                key={service.serviceFullName}
                className={`${styles.serviceItem} ${
                  selectedServices.find(
                    (s) => s.serviceFullName === service.serviceFullName
                  )
                    ? styles.selected
                    : ""
                } ${service.type === "heading" ? styles.heading : ""} ${
                  service.nested && !isNestedDropdownOpen[service.nested]
                    ? styles.hidden
                    : ""
                }${
                  service.type === "heading" &&
                  isNestedDropdownOpen[service.serviceFullName]
                    ? styles.nestedOpen
                    : ""
                }`}
              >
                {service.type === "heading" ? (
                  <div
                    onClick={() =>
                      toggleNestedDropdown(service.serviceFullName)
                    }
                    className={`${styles.nestedServiceTitle} ${
                      isNestedDropdownOpen[service.serviceFullName]
                        ? styles.nestedOpen
                        : ""
                    }`}
                  >
                    {service.serviceFullName}
                    <span className={styles.dropdownArrow}></span>
                  </div>
                ) : (
                  <label className={styles.customCheckbox}>
                    <input
                      type="checkbox"
                      checked={selectedServices.find(
                        (s) => s.serviceFullName === service.serviceFullName
                      )}
                      onChange={() =>
                        toggleSelectService(service.serviceFullName)
                      }
                    />
                    <span className={styles.checkbox}></span>
                    {service.serviceFullName}
                    {service.serviceFullName.startsWith("EV") && (
                      <span
                        className={styles.infoIcon}
                        onClick={(e) =>
                          handleTooltipClick(e, service.serviceFullName)
                        }
                      >
                        ℹ️
                      </span>
                    )}
                  </label>
                )}
              </li>
            ))}
          </ul>
        )}

        <div
          className={`${styles.ovalButtons} ${
            isDropdownOpen ? styles.hidden : ""
          }`}
        >
          {keyServices.map((keyService) => (
            <button
              key={keyService.serviceFullName}
              className={`${styles.ovalButton} ${
                selectedServices.find(
                  (s) => s.serviceFullName === keyService.serviceFullName
                )
                  ? styles.selected
                  : ""
              }`}
              onClick={() => toggleSelectService(keyService.serviceFullName)}
            >
              {keyService.serviceShortName}
            </button>
          ))}
        </div>
      </div>
      <button className={styles.applyFilterButton}>Apply Filter</button>
    </div>
  );
}
