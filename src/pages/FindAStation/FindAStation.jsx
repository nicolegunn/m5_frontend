import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./components/Filters/Filters.jsx";
import styles from "./FindAStation.module.css";
import MapComponent from "./components/Map/MapComponent.jsx";

export default function FindAStation() {
  const [stations, setStations] = useState([]);

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
    </div>
  );
}
