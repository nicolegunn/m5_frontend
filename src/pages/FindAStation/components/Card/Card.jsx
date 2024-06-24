import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import OpeningHours from "./OpeningHours";
import Services from "./Services";

function Card({ station }) {
  const addressArray = station.address.split(",");

  const fuelPriceArray = station.fuelTypes.map(
    (fuelType) => fuelType.pricePerLitre
  );
  console.log(fuelPriceArray);
  const maxFuelPrice = Math.max(...fuelPriceArray).toFixed(3);

  return (
    <div className={styles.card}>
      <div className={styles.stationInfo}>
        <h1 className={styles.stationName}>{station.name}</h1>
        <div className={styles.infoContainer}>
          <div>
            <div>
              <ul className={styles.address}>
              {addressArray.map((addressLine, index) => (
                <li key={index}>
                  {addressLine}
                  {index < addressArray.length - 1 && ","}
                </li>
              ))}
              </ul>
            </div>
            <OpeningHours hoursOpen={station.hours} />
            </div>
          <div>
            <div className={styles.fuelPriceContainer}><p className={styles.fuelPriceContent}><img className={styles.fuelPriceIcon} src="/images/cardImages/pump2.png" alt="" />{maxFuelPrice}/L</p></div>
            <div className={styles.directionsContainer}><p className={styles.directionsContent}><img className={styles.directionsIcon} src="/images/cardImages/directions.png" alt="" />Directions</p></div>
          </div> 
        </div>
        <Services services={station.services} />
      </div>
    </div>
  );
}
export default Card;