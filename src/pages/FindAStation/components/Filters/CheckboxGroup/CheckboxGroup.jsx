import { useState, useEffect } from "react";
import styles from "./CheckboxGroup.module.css";

export default function CheckboxGroup({ title, options, onChange }) {
  // State to track which checkboxes are checked.
  // 'checkedItems' is an object where keys are the options and values are booleans indicating if the checkbox is checked.
  const [checkedItems, setCheckedItems] = useState(
    // For each option in the options array, the reducer function is called.
    // It sets the property option on the acc object to false, indicating that the checkbox is unchecked.
    // Because initially, all checkboxes are unchecked.
    options.reduce((acc, option) => {
      acc[option] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    // Update the 'checkedItems' state to reflect the new checked status of the checkbox.
    setCheckedItems((prevItems) => ({ ...prevItems, [value]: checked }));
  };

  // useEffect hook runs whenever 'checkedItems' changes.
  useEffect(() => {
    // Filter the keys of 'checkedItems' to get an array of selected (checked) items.
    const selectedItems = Object.keys(checkedItems).filter(
      (key) => checkedItems[key]
    );
    // Call the 'onChange' function passed from the parent component with the selected items.
    // This allows the parent component to know the currently selected checkboxes.
    onChange(selectedItems); // Send selected items to parent component
  }, [checkedItems, onChange]);

  return (
    <div className={styles.checkboxGroup}>
      <h3 className={styles.checkboxTitle}>{title}</h3>
      {options.map((option, index) => (
        <label className={styles.customCheckbox} key={index}>
          <input
            type="checkbox"
            value={option}
            checked={checkedItems[option]}
            onChange={handleCheckboxChange}
          />
          <span className={styles.checkbox}></span>
          {option}
        </label>
      ))}
    </div>
  );
}
