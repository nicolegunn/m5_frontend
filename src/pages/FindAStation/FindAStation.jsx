import styles from "./FindAStation.module.css"
import Card from "./components/Card/Card.jsx"
//import Filters from "./components/Filters.jsx"

const stations = JSON.parse(`[{
  "name": "Z Aerodrome Road truck stop",
  "address": "Aerodrome Road",
  "hours": "Open 24 hours",
  "services": [
    "AdBlue Diesel Exhaust Fluid"
  ],
  "link": "https://www.z.co.nz/find-a-station/station/z-aerodrome-road-truck-stop/",
  "fuelTypes": [
    {
      "type": "Z Diesel",
      "pricePerLitre": "2.01"
    }
  ],
  "coordinates": {
    "lat": 51.5944151,
    "lon": -0.240597
  }
},
{
  "name": "Z Hornby North truck stop",
  "address": "74 Carmen Road",
  "hours": "Open 24 hours",
  "services": [
    "AdBlue Diesel Exhaust Fluid"
  ],
  "link": "https://www.z.co.nz/find-a-station/station/z-hornby-north-truck-stop/",
  "fuelTypes": [
    {
      "type": "Z Diesel",
      "pricePerLitre": "1.98"
    }
  ],
  "coordinates": {
    "lat": -43.5366818,
    "lon": 172.5293314
  }
},
{
  "name": "Z 11th Ave",
  "address": "Cnr Eleventh Avenue and Cameron Road, Tauranga",
  "hours": "24/7 pay at pump",
  "services": [
    "f'real",
    "Pre-order Coffee",
    "Pay in app",
    "Z Espress Coffee & Fresh Food",
    "Z2O carwash",
    "Trailer hire",
    "LPG SWAP'n'GO",
    "Pay at pump",
    "Super long hoses",
    "Bathrooms",
    "A-Z Screen"
  ],
  "link": "https://www.z.co.nz/find-a-station/station/z-11th-ave/",
  "fuelTypes": [
    {
      "type": "ZX Premium",
      "pricePerLitre": "2.10"
    },
    {
      "type": "Z91 Unleaded",
      "pricePerLitre": "1.41"
    },
    {
      "type": "Z Diesel",
      "pricePerLitre": "2.20"
    }
  ],
  "coordinates": {
    "lat": -37.7086998,
    "lon": 176.1485077
  }
},
{
  "name": "Z 15th Ave",
  "address": "10-18 Fifteenth Avenue, Tauranga",
  "hours": "24/7 pay at pump",
  "services": [
    "Pre-order Coffee",
    "Pay in app",
    "Z Espress Coffee & Fresh Food",
    "LPG SWAP'n'GO",
    "Pay at pump",
    "Super long hoses",
    "Bathrooms"
  ],
  "link": "https://www.z.co.nz/find-a-station/station/z-15th-ave/",
  "fuelTypes": [
    {
      "type": "ZX Premium",
      "pricePerLitre": "2.19"
    },
    {
      "type": "Z91 Unleaded",
      "pricePerLitre": "2.12"
    },
    {
      "type": "Z Diesel",
      "pricePerLitre": "1.24"
    }
  ],
  "coordinates": {
    "lat": -37.7112734,
    "lon": 176.1654158
  }
},
{
  "name": "Z Addington",
  "address": "250 Lincoln Road, Addington, Christchurch",
  "hours": "24/7 pay at pump",
  "services": [
    "Pre-order Coffee",
    "Pay in app",
    "Z Espress Coffee & Fresh Food",
    "Z2O carwash",
    "Trailer hire",
    "LPG SWAP'n'GO",
    "Pay at pump",
    "Super long hoses",
    "Bathrooms",
    "A-Z Screen"
  ],
  "link": "https://www.z.co.nz/find-a-station/station/z-addington/",
  "fuelTypes": [
    {
      "type": "ZX Premium",
      "pricePerLitre": "1.56"
    },
    {
      "type": "Z91 Unleaded",
      "pricePerLitre": "1.03"
    },
    {
      "type": "Z Diesel",
      "pricePerLitre": "2.10"
    }
  ],
  "coordinates": {
    "lat": -43.5457832,
    "lon": 172.6084469
  }
}]`);

export default function FindAStation() {
  return (
    <div className={styles.MainContainer}>
      {stations.map((station) => (
        <Card key={station.name} station={station}/>
      ))}
    </div>
  )
}