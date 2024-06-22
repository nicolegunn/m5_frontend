// services.js
export const services = [
  { serviceFullName: "EV Charging", serviceShortName: null, type: "heading" },
  {
    serviceFullName: "EV - Fast",
    serviceShortName: "EV - Fast",
    type: "checkbox",
    nested: "EV Charging",
  },
  {
    serviceFullName: "EV - Ultra Fast",
    serviceShortName: "EV - Ultra Fast",
    type: "checkbox",
    nested: "EV Charging",
  },
  {
    serviceFullName: "Bathrooms",
    serviceShortName: "Bathrooms",
    type: "checkbox",
  },
  { serviceFullName: "Carwash", serviceShortName: "Carwash", type: "checkbox" },
  { serviceFullName: "Food & Drinks", serviceShortName: null, type: "heading" },
  {
    serviceFullName: "Pre-order Coffee",
    serviceShortName: "Pre-order Coffee",
    type: "checkbox",
    nested: "Food & Drinks",
  },
  {
    serviceFullName: "Z Espress Coffee and Fresh Food",
    serviceShortName: "Fresh Food",
    type: "checkbox",
    nested: "Food & Drinks",
  },
  { serviceFullName: "App Pay", serviceShortName: "App Pay", type: "checkbox" },
  { serviceFullName: "ATM", serviceShortName: "ATM", type: "checkbox" },
  {
    serviceFullName: "LPG SWAP’n’ GO",
    serviceShortName: "LPG",
    type: "checkbox",
  },
  {
    serviceFullName: "Trailer Hire",
    serviceShortName: "Trailer Hire",
    type: "checkbox",
  },
];

export const keyServices = [
  { serviceFullName: "Bathrooms", serviceShortName: "Bathrooms" },
  { serviceFullName: "Carwash", serviceShortName: "Carwash" },
  { serviceFullName: "EV - Ultra Fast", serviceShortName: "EV - Ultra Fast" },
  {
    serviceFullName: "Z Espress Coffee and Fresh Food",
    serviceShortName: "Fresh Food",
  },
];
