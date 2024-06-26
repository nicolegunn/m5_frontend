import { useRef, useEffect, useState } from "react";
import mapPointIcon from "../../../../../src/assets/map-point-icon.svg";
import { Loader } from "@googlemaps/js-api-loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import styles from "./MapComponent.module.css";
import Card from "../Card/Card";

const MapComponent = ({ stations }) => {
  const mapRef = useRef(null);
  const searchBoxRef = useRef(null);
  const [map, setMap] = useState(null);
  const [filteredStations, setFilteredStations] = useState([]);  // new array for stations within radius
  const [showCardContainer, setShowCardContainer] = useState(false);  // Control visibility of the card container

  //loads the map with necessary API validations and libraries
  useEffect(() => {
    const loader = new Loader({
        apiKey: import.meta.env.VITE_MAP_API_KEY,
        version: "weekly",
        libraries: ["places", "geometry"]
    });

    loader
      .load()
      .then(() => {
        const loadedMap = initializeMap(mapRef.current);
        setMap(loadedMap);
        createMarkers(loadedMap, stations);
        setupSearchBox(loadedMap, searchBoxRef.current, stations, setFilteredStations, setShowCardContainer);
      })
      .catch((e) => {
        console.error("Failed to load Google Maps", e);
      });
  }, [stations]);

  return (
    <div className={styles.mapContainer}>
      <div className={styles.searchContainer}>
        <h2 className={styles.findAStationTitle}>Find a station</h2>
        <div className={styles.inputContainer}>
          <input
            ref={searchBoxRef}
            type="text"
            placeholder="Enter a location / station / truckstop"
            className={styles.searchBox}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.magnifyingGlass}
          />
        </div>
        <button
          className={styles.searchButton}
          onClick={() =>
            searchBoxRef.current &&
            google.maps.event.trigger(searchBoxRef.current, "places_changed")
          }
        >
          <img src={mapPointIcon} alt="Map Pointer Icon" className="icon" />
          Near Me
        </button>
      </div>

      {showCardContainer && (

                <div className={styles.cardContainer}>
                
                    <div className={styles.stationHeader}>
                      <div className={styles.headerContent}>
                        <h1>{filteredStations.length} Stations Found</h1>
                        <button className={styles.filterButton}>
                        <FontAwesomeIcon icon={faFilter} /> Sort by
                        </button>
                      </div>
                    </div>
                    {filteredStations.map(station => <Card key={station.name} station={station} />)}
                </div>
            )}
      <div ref={mapRef} className={styles.map}></div>
    </div>
  );
};

function initializeMap(mapElement) {
  return new google.maps.Map(mapElement, {
    center: { lat: -39.9006, lng: 170.886 },
    zoom: 6.5,
    mapTypeControl: false,
    fullscreenControl: false,
  });
}

//function that handles the searching
//takes in the map and input element and array of stations and new array of stations within the radius of area entered. 
function setupSearchBox(map, inputElement, stations, setFilteredStations, setShowCardContainer) {
  const searchBox = new google.maps.places.SearchBox(inputElement);
  searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();

      setShowCardContainer(true);
      if (places.length === 0) return;

      //takes the location of the place entered by the user and sets radius around it
      const bounds = new google.maps.LatLngBounds();
      const RADIUS = 3000; // Radius in meters 

      //this loop checks the stations array passed from FindAStaion page to see if they are located within the radius
      //uses the built in geometric functions in the geometry lib of the API to calculate distance
      //Adds the station into the new array. This new array is what is used to display the cards in the above JSX. 
      places.forEach(place => {
          if (!place.geometry) return;
          const filtered = stations.filter(station => {
              const stationPos = new google.maps.LatLng(station.coordinates.lat, station.coordinates.lon);
              const distance = google.maps.geometry.spherical.computeDistanceBetween(place.geometry.location, stationPos);
              return distance <= RADIUS;
          });

          setFilteredStations(filtered); // Update state with filtered stations

          if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
          } else {
              bounds.extend(place.geometry.location);
          }
      });
      map.fitBounds(bounds);
  });
}

// Function to create and manage custom markers for stations
function createMarkers(map, stations) {
  stations.forEach((station) => {
    station.expanded = false; // Initialize expanded state as false
    const overlay = new window.google.maps.OverlayView();

    overlay.onAdd = function () {
      const div = document.createElement("div");
      // Apply CSS module class names
      div.className = station.expanded
        ? `${styles.customMarker} ${styles.expanded}`
        : styles.customMarker;
      div.style.position = "absolute";
      div.innerHTML = getMarkerContent(station, station.expanded); // Render based on expanded state

      // Toggle the expansion of the marker on click
      div.addEventListener(
        "click",
        () => {
          station.expanded = !station.expanded; // Toggle the expanded state
          div.className = station.expanded
            ? `${styles.customMarker} ${styles.expanded}`
            : styles.customMarker;
          div.innerHTML = getMarkerContent(station, station.expanded); // Re-render the content
        },
        { passive: true }
      );

      this.getPanes().overlayMouseTarget.appendChild(div);

      overlay.draw = function () {
        const projection = this.getProjection();
        const position = projection.fromLatLngToDivPixel(
          new window.google.maps.LatLng(
            station.coordinates.lat,
            station.coordinates.lon
          )
        );
        // Adjust left and top to account for expanded size
        div.style.left = `${position.x - (station.expanded ? 75 : 15)}px`;
        div.style.top = `${position.y - (station.expanded ? 30 : 15)}px`;
      };
    };

    overlay.setMap(map);
  });
}

// Function to determine the content of markers based on whether they are expanded
function getMarkerContent(station, expanded) {
  if (expanded) {
      return `
          <div class="${styles.markerContent}"> 
              <img src="/images/ZEnergyLogoWhite.png" alt="Station" class="${styles.logo}">
              <div class="${styles.markerInfo}">
                  <strong>${station.fuelTypes[0].pricePerLitre}/L</strong>
                  <div class="${styles.name}">${station.name}</div>
                  <div class="${styles.status}">${station.open24Hours ? 'Open 24 Hours' : '24/7 Pay at Pump'}</div>
              </div>
          </div>`;
  } else {
      return `<img src="/images/ZEnergyLogoWhite.png" alt="Station" class="${styles.logoFull}">`;
  }
}


export default MapComponent;