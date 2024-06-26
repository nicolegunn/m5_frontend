import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function OpeningHours({ hoursOpen }) {
  const [isOpeningHoursExpanded, setOpeningHoursExpanded] = useState(false);

  const openingHours = [
    {
      day: "Monday",
      hours: "Open 24 hours",
    },
    {
      day: "Tuesday",
      hours: "Open 24 hours",
    },
    {
      day: "Wednesday",
      hours: "Open 24 hours",
    },
    {
      day: "Thursday",
      hours: "Open 24 hours",
    },
    {
      day: "Friday",
      hours: "Open 24 hours",
    },
    {
      day: "Saturday",
      hours: "Open 24 hours",
    },
    {
      day: "Sunday",
      hours: "Open 24 hours",
    },
  ];
  const toggleOpeningHoursExpand = () => {
    setOpeningHoursExpanded(!isOpeningHoursExpanded);
  };

  return (
    <div>
      <div className={styles.openingHoursContainer}>
        {hoursOpen}{" "}
        <FontAwesomeIcon
          className={
            isOpeningHoursExpanded
              ? styles.openingHoursButtonExpanded
              : styles.openingHoursButtonCollapsed
          }
          icon={faChevronDown}
          onClick={toggleOpeningHoursExpand}
        />
      </div>
      {isOpeningHoursExpanded && (
        <div className={styles.openingHoursDetailContainer}>
          <ul className={styles.openingHoursDay}>
            {openingHours.map((dayOfWeek, index) => (
              <li key={index}>{dayOfWeek.day}</li>
            ))}
          </ul>
          <ul className={styles.openingHoursTimes}>
            {openingHours.map((hoursOfDay, index) => (
              <li key={index}>{hoursOfDay.hours}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default OpeningHours;
