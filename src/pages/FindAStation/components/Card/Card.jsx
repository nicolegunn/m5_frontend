import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function Card({ station }) {
  const [isServicesExpanded, setServicesExpanded] = useState(false);
  const [isOpeningHoursExpanded, setOpeningHoursExpanded] = useState(false);

  const addressArray = station.address.split(",");

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

  function getImageSrc(service) {
    console.log(service);
    if (service === "f'real") {
      console.log("true");
      return "/images/cardImages/soda.png";
    } else if (service === "Pre-order Coffee") {
      return "/images/cardImages/coffeeCup.png";
    } else if (service === "Pay in app") {
      return "/images/cardImages/payApp.png";
    } else if (service === "Z Espress Coffee & Fresh Food") {
      return "/images/cardImages/foodCoffee.png";
    } else if (service === "Z2O carwash") {
      return "/images/cardImages/carWash.png";
    } else if (service === "Trailer hire") {
      return "/images/cardImages/trailer.png";
    } else if (service === "LPG SWAP'n'GO") {
      return "/images/cardImages/swapngo.png";
    } else if (service === "Pay at pump") {
      return "/images/cardImages/pump.png";
    } else if (service === "Super long hoses") {
      return "/images/cardImages/hose.png";
    } else if (service === "Bathrooms") {
      return "/images/cardImages/toilet.png";
    } else if (service === "A-Z Screen") {
      return "/images/cardImages/screen.png";
    } else if (service === "AdBlue Diesel Exhaust Fluid") {
      return "/images/cardImages/dieselFluid.png";
    } else if (service.includes('EV Charging')) {
      return "/images/cardImages/fastCharge.png";
    } else if (service === 'Pay by plate') {
      return "/images/cardImages/licence.png";
    } else if (service === 'Fast fill Diesel lane') {
      return "/images/cardImages/fastTruck.png";
    } else if (service === 'Compostable Cups') {
      return "/images/cardImages/compost.png";
    } else {
      return "";
    }
  }
  const toggleServicesExpand = () => {
    setServicesExpanded(!isServicesExpanded);
  };
  const toggleOpeningHoursExpand = () => {
    setOpeningHoursExpanded(!isOpeningHoursExpanded);
  };
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
            <p
              style={{
                fontSize: "16px",
                paddingBottom: "10px",
                width: "320px",
              }}
            >
              {addressArray.map((addressLine, index) => (
                <p className={styles.address} key={index}>
                  {addressLine}
                  {index < addressArray.length - 1 && ","}
                </p>
              ))}
            </p>
            <p>
              {station.hours}{" "}
              <FontAwesomeIcon
                className={
                  isOpeningHoursExpanded
                    ? styles.openingHoursButtonExpanded
                    : styles.openingHoursButtonCollapsed
                }
                icon={faChevronDown}
                onClick={toggleOpeningHoursExpand}
              />
            </p>
            <div
              style={{ display: isOpeningHoursExpanded ? "grid" : "none" }}
              className={styles.openingHoursContainer}
            >
              <ul className={styles.openingHoursDay}>
                {openingHours.map((dayOfWeek) => (
                  <li>{dayOfWeek.day}</li>
                ))}
              </ul>
              <ul className={styles.openingHoursTimes}>
                {openingHours.map((hoursOfDay) => (
                  <li>{hoursOfDay.hours}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className={styles.fuelPriceContainer}><p className={styles.fuelPriceContent}><img className={styles.fuelPriceIcon} src="/images/cardImages/pump2.png" alt="" />{maxFuelPrice}/L</p></div>
            <div className={styles.directionsContainer}><p className={styles.directionsContent}><img className={styles.directionsIcon} src="/images/cardImages/directions.png" alt="" />Directions</p></div>
          </div>    
          

        </div>

        <div className={styles.servicesOuterContainer}>
          <p className={styles.servicesHeader}>Services</p>
          <div className={styles.servicesContainer}>
            {isServicesExpanded
              ? station.services.map((service) => (
                  <div>
                    <img
                      className={styles.serviceIcon}
                      src={getImageSrc(service)}
                      alt=""
                    />
                    <span key={service} className={styles.service}>
                      <span className={styles.serviceIconContainer}></span>
                      {service}
                    </span>
                  </div>
                ))
              : station.services.slice(0, 4).map((service) => (
                  <div>
                    <img
                      className={styles.serviceIcon}
                      src={getImageSrc(service)}
                      alt=""
                    />
                    <span key={service} className={styles.service}>
                      {service}
                    </span>
                  </div>
                ))}
            {station.services.length > 6 && (
              <p className={styles.expandButton} onClick={toggleServicesExpand}>
                {isServicesExpanded ? "View less" : `...View more`}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
