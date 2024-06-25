import React, { useRef, useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styles from './MapComponent.module.css';

//Main component for rendering the map and search functionalities
const MapComponent = ({ stations }) => {
    const mapRef = useRef(null);
    const searchBoxRef = useRef(null);
    const [map, setMap] = useState(null);
    const [searchBox, setSearchBox] = useState(null);  // State to hold the searchBox

    // useEffect to load the Google Maps API, initialize the map, and set up search functionality
    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_MAP_API_KEY,
            version: "weekly",
            libraries: ["places"] //library from the API to zoom into specific places
        });

        // Asynchronous loading of the Google Maps script
        loader.load().then(() => {
            const loadedMap = initializeMap(mapRef.current);
            setMap(loadedMap);
            createMarkers(loadedMap, stations);
            const initializedSearchBox = setupSearchBox(loadedMap, searchBoxRef.current);
            setSearchBox(initializedSearchBox);  // Store the searchBox in state
        }).catch(e => {
            console.error("Failed to load Google Maps", e);
        });
    }, [stations]);

    const handleSearch = () => {
        // Ensure the searchBox triggers the search without re-adding the input
        if (searchBox) {
            google.maps.event.trigger(searchBox, 'places_changed');
        }
    };

    return (
        <div className={styles.mapContainer}>
            <div className={styles.searchContainer}>
                <input ref={searchBoxRef} type="text" placeholder="Search location" className={styles.searchBox} />
                <button className={styles.searchButton} onClick={() => searchBoxRef.current && google.maps.event.trigger(searchBoxRef.current, 'places_changed')}>
                    Search
                </button>
            </div>
            <div ref={mapRef} className={styles.map}></div>
        </div>
    );
};


// Function to initialize the Google Map with provided settings
function initializeMap(mapElement) {
    return new window.google.maps.Map(mapElement, {
        center: { lat: -40.9006, lng: 170.8860 },
        zoom: 5.8,
        mapTypeControl: false, 
        fullscreenControl: false
    });
}

// Function to set up the search box on the map
//I can't recctify the line of code below with the div being rendered in Mapcomponent
function setupSearchBox(map, inputElement) {
    const searchBox = new google.maps.places.SearchBox(inputElement);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputElement); //this line of code. 

    // Listener for when the user selects a place from the search suggestions
    searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) return;

        const bounds = new google.maps.LatLngBounds();
        places.forEach(place => {
            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

    return searchBox;
}

// Function to create and manage custom markers for stations
function createMarkers(map, stations) {
    stations.forEach(station => {
        station.expanded = false;  // Initialize expanded state as false
        const overlay = new window.google.maps.OverlayView();

        overlay.onAdd = function() {
            const div = document.createElement('div');
            // Apply CSS module class names
            div.className = station.expanded ? `${styles.customMarker} ${styles.expanded}` : styles.customMarker; 
            div.style.position = 'absolute';
            div.innerHTML = getMarkerContent(station, station.expanded); // Render based on expanded state

            // Toggle the expansion of the marker on click
            div.addEventListener('click', () => {
                station.expanded = !station.expanded;  // Toggle the expanded state
                div.className = station.expanded ? `${styles.customMarker} ${styles.expanded}` : styles.customMarker;  
                div.innerHTML = getMarkerContent(station, station.expanded);  // Re-render the content
            });

            this.getPanes().overlayMouseTarget.appendChild(div);

            overlay.draw = function() {
                const projection = this.getProjection();
                const position = projection.fromLatLngToDivPixel(new window.google.maps.LatLng(station.coordinates.lat, station.coordinates.lon));
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
            <div class="${styles.markerInfo}">
                <strong>${station.fuelTypes[0].pricePerLitre}/L</strong>
                <div class="${styles.name}">${station.name}</div>
                <div class="${styles.status}">${station.open24Hours ? 'Open 24 Hours' : '24/7 Pay at Pump'}</div>
            </div>
            <img src="/images/ZEnergyLogoWhite.png" alt="Station" class="${styles.logo}">`;
    } else {
        return `<img src="/images/ZEnergyLogoWhite.png" alt="Station" class="${styles.logoFull}">`;
    }
}

export default MapComponent;
