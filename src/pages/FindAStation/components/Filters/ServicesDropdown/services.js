// services.js
export const services = [
  { serviceFullName: "EV Charging", serviceShortName: null, type: "heading" },
  {
    serviceFullName: "EV - Fast",
    serviceShortName: "EV - Fast",
    serviceDatabaseName: "EV Charging - Fast",
    type: "checkbox",
    nested: "EV Charging",
    tooltip:
      "At a 50kW fast charger, you'll get roughly 100km of range every 13 minutes of charging.",
  },
  {
    serviceFullName: "EV - Ultra Fast",
    serviceShortName: "EV - Ultra Fast",
    serviceDatabaseName: "EV Charging - Ultra-Fast",
    type: "checkbox",
    nested: "EV Charging",
    tooltip:
      "At a 180kW ultra-fast charger, you'll get roughly 100km of range every 8 minutes of charging.",
  },
  {
    serviceFullName: "Bathrooms",
    serviceShortName: "Bathrooms",
    serviceDatabaseName: "Bathrooms",
    type: "checkbox",
  },
  {
    serviceFullName: "Carwash",
    serviceShortName: "Carwash",
    serviceDatabaseName: "Z2O carwash",
    type: "checkbox",
  },
  {
    serviceFullName: "Food & Drinks",
    serviceShortName: null,
    type: "heading",
  },
  {
    serviceFullName: "Pre-order Coffee",
    serviceShortName: "Pre-order Coffee",
    serviceDatabaseName: "Pre-order Coffee",
    type: "checkbox",
    nested: "Food & Drinks",
  },
  {
    serviceFullName: "Z Espress Coffee & Fresh Food",
    serviceShortName: "Fresh Food",
    serviceDatabaseName: "Z Espress Coffee & Fresh Food",
    type: "checkbox",
    nested: "Food & Drinks",
  },
  {
    serviceFullName: "App Pay",
    serviceShortName: "App Pay",
    serviceDatabaseName: "Pay in app",
    type: "checkbox",
  },
  {
    serviceFullName: "ATM",
    serviceShortName: "ATM",
    serviceDatabaseName: "ATM",
    type: "checkbox",
  },
  {
    serviceFullName: "LPG SWAP'n'GO",
    serviceShortName: "LPG",
    serviceDatabaseName: "LPG SWAP'n'GO",
    type: "checkbox",
  },
  {
    serviceFullName: "Trailer Hire",
    serviceShortName: "Trailer Hire",
    serviceDatabaseName: "Trailer hire",
    type: "checkbox",
  },
];

export const keyServices = [
  { serviceFullName: "Bathrooms", serviceShortName: "Bathrooms" },
  { serviceFullName: "Carwash", serviceShortName: "Carwash" },
  { serviceFullName: "EV - Ultra Fast", serviceShortName: "EV - Ultra Fast" },
  {
    serviceFullName: "Z Espress Coffee & Fresh Food",
    serviceShortName: "Fresh Food",
  },
];
