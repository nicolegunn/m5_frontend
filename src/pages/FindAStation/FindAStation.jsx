import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./components/Filters/Filters.jsx";
import Card from "./components/Card/Card.jsx";
import styles from "./FindAStation.module.css";
import MapComponent from "./components/Map/MapComponent.jsx";

export default function FindAStation() {
  const [stations, setStations] = useState([]);
  const [selectedFuelType, setSelectedFuelType] = useState("");

  const fetchStations = async (filters) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/stations`,
        { params: filters }
      );
      setStations(response.data);
    } catch (err) {
      console.error("Error fetching stations:", err);
    }
  };

  const handleApplyFilters = (filters) => {
    fetchStations(filters);
    if (filters.fuelTypes.length > 0) {
      setSelectedFuelType(filters.fuelTypes[0]); // Set selected fuel type to the first fuel type in the array
    } else {
      setSelectedFuelType(""); // Reset selected fuel type if no fuel types are selected
    }
  };

  useEffect(() => {
    fetchStations();
  }, []);


  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.path}>
        Home &gt; <span>Find a station</span>
      </h3>
      <Filters fetchStations={handleApplyFilters} />
      <MapComponent stations={stations} />
      {stations.map((station) => (
        <Card key={station.name} station={station} />
      ))}
    </div>
  );
}
