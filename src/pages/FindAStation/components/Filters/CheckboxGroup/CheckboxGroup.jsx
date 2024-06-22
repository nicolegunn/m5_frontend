import { useState } from "react";
import styles from "./CheckboxGroup.module.css";

export default function CheckboxGroup({ title, options }) {
  const [checkedItems, setCheckedItems] = useState(
    options.reduce((acc, option) => {
      acc[option] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setCheckedItems((prevItems) => ({ ...prevItems, [value]: checked }));
  };

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
