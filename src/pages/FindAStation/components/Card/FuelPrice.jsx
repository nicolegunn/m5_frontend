import styles from "./Card.module.css";
import { useState } from "react";


function FuelPrice(fuelTypes) {
    const maxFuelType = "";
    const [fuelArray, setFuelArray] = useState([]);

    if (fuelArray !== undefined) {
        setFuelArray(fuelTypes)
    }

        const max = fuelArray.reduce(function (prev, current) {
            return (prev && prev.y > current.y) ? prev : current
        });
    

    
    
    
    const fuels = {
        "ZX Premium": { style: "styles.premiumFuel", icon: "/images/cardImages/zPremium" },
        "Z91 Unleaded": { style: "styles.regularFuel", icon: "/images/cardImages/zRegular" },
        "Z Diesel": { style: "styles.dieselFuel", icon: "/images/cardImages/zDiesel" },
    }
    const getImageSrc = (maxFuelType) => fuels[maxFuelType].icon || "";
    const getStyle = (maxFuelType) => fuels[maxFuelType].style || "";

    //console.log("Object with maximum value:", maxFuelType);
    
    return <div></div>
    
    // <div className={styles.fuelPriceContainer} >
    //     <p className={styles.fuelPriceContent}><img className={`${getStyle(maxFuelType)} ${styles.fuelPriceIcon}`} src={getImageSrc(maxFuelType)} alt="" />{maxFuelPrice}/L</p>
    // </div >
}
export default FuelPrice;
