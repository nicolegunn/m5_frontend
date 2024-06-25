import React, { useRef, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styles from './MapComponent.module.css';


//function to generate HTML content for the custom expanded markers. Displays fuel price, station name and status
const getMarkerContent = (station, expanded, selectedFuelType) => {

    // Find the price for the selected fuel type
    const fuelType = station.fuelTypes.find(ft => ft.type === selectedFuelType) || station.fuelTypes[0];
    const pricePerLitre = fuelType ? fuelType.pricePerLitre : 'N/A';

    
    return `
        <div class="${expanded ? `${styles.customMarker} ${styles.expanded}` : styles.customMarker}">
            <img src="/images/ZEnergyLogoWhite.png" alt="${station.name}" />
            ${expanded ? `
                <div class="${styles.markerInfo}">
                    <strong>${pricePerLitre}/L</strong>
                    <div class="name"> ${station.name}</div>
                    <div class="status">${station.open24Hours ? 'Open 24 Hours' : '24/7 Pay at Pump'}</div>
                </div>` : ''
            }
        </div>
    `;
};

//Map component to render the Google Map with markers for each station.
//It takes in an array of stations that is populated using the fetchStations function in FindAStation.jsx
//Also the selected fuelType to display in the expanded marker
const MapComponent = ({ stations, selectedFuelType }) => {
    const mapRef = useRef(null);

    // Load the Google Maps JavaScript API
    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_MAP_API_KEY,
            version: "weekly"
        });

        //Initialize the map once the API is loaded
        loader.load().then(() => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: -40.9006, lng: 170.8860 },
                zoom: 5.8,
            });

            // Track expanded state for each marker
            const expandedMarkers = new Map();

            // Loop through each station to create markers
            stations.forEach(station => {
                const markerHtml = document.createElement('div');
                const markerId = station.id; // Ensure each station has a unique ID
                markerHtml.innerHTML = getMarkerContent(station, false, selectedFuelType);
                markerHtml.style.position = 'absolute';
                expandedMarkers.set(markerId, false); // Initialize all markers as collapsed

                // Add click event listener to toggle marker expansion
                markerHtml.onclick = () => {
                    const isExpanded = expandedMarkers.get(markerId);
                    expandedMarkers.set(markerId, !isExpanded);
                    markerHtml.innerHTML = getMarkerContent(station, !isExpanded);
                    markerHtml.classList.toggle(styles.expanded, !isExpanded);
                };

                // Create an overlay to position the custom marker HTML on the map
                const overlay = new window.google.maps.OverlayView();
                overlay.onAdd = function() {
                    const layer = this.getPanes().overlayMouseTarget;
                    layer.appendChild(markerHtml);
                    overlay.draw = function() {
                        const projection = this.getProjection();
                        const position = projection.fromLatLngToDivPixel(new window.google.maps.LatLng(station.coordinates.lat, station.coordinates.lon));
                        markerHtml.style.left = `${position.x - 25}px`;
                        markerHtml.style.top = `${position.y - 50}px`;
                    };
                };
                overlay.setMap(map); // Add the overlay to the map
            });
        }).catch(e => {
            console.error("Failed to load Google Maps", e);
        });

    }, [stations, selectedFuelType]);

    return <div ref={mapRef} className={styles.MapContainer} style={{ width: '100%', height: '700px' }} />;
};

export default MapComponent;