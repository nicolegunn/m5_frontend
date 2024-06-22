import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./FindAStation.module.css";

export default function FindAStation() {
  const [stations, setStations] = useState([]);

  const fetchStations = async (filters = {}) => {
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

  useEffect(() => {
    fetchStations();
  }, []);

  return (
    <div className={styles.MainContainer}>
      <h1>Find A Station</h1>
    </div>
  );
}
