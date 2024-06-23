import React, { useRef, useEffect, useState } from 'react';
import styles from "./FindAStation.module.css";

export default function FindAStation() {
    //state to hold array of stations fetched from the API
    const [stations, setStations] = useState([]);
    //reference to the fiv element where the Google Map will be rendered
    const mapRef = useRef(null);

    useEffect(() => {
        //function to load the maps script dynamically. Callsback if already loaded or creates scipt if not
        const loadGoogleMapsScript = (callback) => {
            if (window.google) {
                callback();
            } else {
                const script = document.createElement('script');
                script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD04OW8iPvoRyjQ7CSpUEBQridzYUp-SWg&callback=initMap';
                script.async = true;
                script.defer = true;
                script.onload = callback;
                document.head.appendChild(script);
            }
        };

        //function to fetch stations from backend
        const fetchStations = async () => {
            const response = await fetch('http://localhost:3001/api/stations'); 
            const data = await response.json();
            setStations(data);
        };

        //loads maps script and fetch stations
        loadGoogleMapsScript(() => {
            fetchStations();
        });
    }, []);

    //function to toggle the display of information in the markers
    const toggleMarkerDetails = (markerHtml, station) => {
        //checks if marker is expanded or not and updates state
        const isExpanded = markerHtml.getAttribute('data-expanded') === 'true';
        if (isExpanded) {
            
            markerHtml.innerHTML = '<img src="/images/ZEnergyLogoWhite.png" alt="Z Logo" />';
            markerHtml.setAttribute('data-expanded', 'false');
        } else {
            
            markerHtml.innerHTML = `
                <img src="/images/ZEnergyLogoWhite.png" alt="Z Logo" style="height: 50px;" />
                <div>
                    $${station.fuelTypes[0].pricePerLitre} / L<br>
                    <strong>${station.name}</strong><br>
                    ${station.hours}
                </div>
            `;
            markerHtml.setAttribute('data-expanded', 'true');
        }
    }

    //effect for when stations data is available and maps is loaded
    useEffect(() => {
        if (stations.length > 0 && window.google) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: -40.9006, lng: 174.8860 }, 
                zoom: 6
            });

            //creates markers for each station
            stations.forEach(station => {
                const markerHtml = document.createElement('div');
                markerHtml.className = styles.customMarker;
                markerHtml.innerHTML = '<img src="/images/ZEnergyLogoWhite.png" alt="Z Logo" />';
                markerHtml.style.position = 'absolute';
                markerHtml.setAttribute('data-expanded', 'false');

                //creates an overlay view to add custom HTML content to the map
                const overlay = new window.google.maps.OverlayView();
                overlay.onAdd = function() {
                    const layer = this.getPanes().overlayMouseTarget;
                    layer.appendChild(markerHtml);
                    overlay.draw = function() {
                        const projection = this.getProjection();
                        const position = projection.fromLatLngToDivPixel(new window.google.maps.LatLng(station.coordinates.lat, station.coordinates.lon));
                        markerHtml.style.left = position.x + 'px';
                        markerHtml.style.top = position.y + 'px';
                    };
                };
                overlay.setMap(map);
                //click event listener to expand markers
                markerHtml.addEventListener('click', () => toggleMarkerDetails(markerHtml, station));
            });
        }
    }, [stations]); 

    return (
        <div className={styles.MainContainer}>
            <div ref={mapRef} className={styles.MapContainer}/>
        </div>
    );
}
