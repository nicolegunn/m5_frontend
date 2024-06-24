import styles from "./Card.module.css";
import { useState } from "react";
function Services({ services }) {
    const [isServicesExpanded, setServicesExpanded] = useState(false);

    const serviceIcons = {
        "f'real": "/images/cardImages/soda.png",
        "Pre-order Coffee": "/images/cardImages/coffeeCup.png",
        "Pay in app": "/images/cardImages/payApp.png",
        "Z Espress Coffee & Fresh Food": "/images/cardImages/foodCoffee.png",
        "Z2O carwash": "/images/cardImages/carWash.png",
        "Trailer hire": "/images/cardImages/trailer.png",
        "LPG SWAP'n'GO": "/images/cardImages/swapngo.png",
        "Pay at pump": "/images/cardImages/pump.png",
        "Super long hoses": "/images/cardImages/hose.png",
        "Bathrooms": "/images/cardImages/bathrooms.png",
        "A-Z Screen": "/images/cardImages/screen.png",
        "AdBlue Diesel Exhaust Fluid": "/images/cardImages/dieselFluid.png",
        "EV Charging - Fast": "/images/cardImages/fastCharge.png",
        "EV Charging - Ultra-Fast": "/images/cardImages/fastCharge.png",
        "EV Charging - Fast &/or Ultra-Fast": "/images/cardImages/fastCharge.png",
        "Pay by plate": "/images/cardImages/licence.png",
        "Fast fill Diesel lane": "/images/cardImages/fastTruck.png",
        "Compostable Cups": "/images/cardImages/compost.png",
    };

    const getImageSrc = (service) => serviceIcons[service] || "";

    const toggleServicesExpand = () => {
        setServicesExpanded(!isServicesExpanded);
      };
  return (
    <div className={styles.servicesOuterContainer}>
          <p className={styles.servicesHeader}>Services</p>
          <div className={styles.servicesContainer}>
            {(isServicesExpanded? services : services.slice(0, 4))?.map((service, index) => (
              <div key={index}>
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
            {services.length > 6 && (
              <p className={styles.expandButton} onClick={toggleServicesExpand}>
                {isServicesExpanded ? "View less" : `...View more`}
              </p>
            )}
          </div>
        </div>
  )
}
export default Services