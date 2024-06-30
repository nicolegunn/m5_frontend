# Z Energy Prototype Website - Front End 

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Google Maps](https://img.shields.io/badge/Google%20Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-339AF0?style=for-the-badge&logo=font-awesome&logoColor=white)

This is a React-based project for managing and visualizing service station data with interactive maps and detailed service station information.

## Features

- Filtering Stations based on station type, fuel type, and services
- Interactive Map Feature that display custom markers
- Card Component that displays detailed information for each station

## Usage 

- Navigate to the Find a Station page
- Filter stations according to your requirements 
- Click markers for more information on a specific station
- Enter a location in the search bar of the map which will display stations within the surrounding area  

## Technologies Used

This project was bootstrapped with the following technologies:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React DOM](https://reactjs.org/docs/react-dom.html) - Serves as the entry point to the DOM and server renderers for React
- [React Router Dom](https://reactrouter.com/) - DOM bindings for React Router
- [Vite](https://vitejs.dev/) - A modern frontend build tool that provides a faster and leaner development experience
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview) - Allows you to customize maps with your own content and imagery for display on web pages  and mobile devices
- [Font Awesome](https://fontawesome.com) - Popular icon set and toolkit

## Prerequisites

![Node](https://img.shields.io/badge/Node.js-16.0.0-green?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-8.0.0-red?style=for-the-badge&logo=npm&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Google Maps](https://img.shields.io/badge/Google%20Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white)



- Node.js (v16 or later)
- npm (v8 or later)
- MongoDB installed locally with service station data  
A tool to seed a local instance of MongoDB with service station data can be found here: [Service Station CLI Seed Tool](https://github.com/nicolegunn/cli-mongodb-seed-service-stations.git)
- Google Maps JavaScript API Key: https://developers.google.com/maps/documentation/javascript/get-api-key

## Installation and Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/nicolegunn/service-station-website-frontend.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd service-station-website-frontend
   ```
3. **Create a .env file in the root directory and add your environment variables**:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_MAP_API_KEY=<Your Google Maps API Key>
   ```
4. **Install dependencies**:
   ```sh
   npm install
   ```
5. **Run the application**:
   ```sh
   npm run dev
   ```
6. **Clone and setup the backend**:  
   The frontend needs to be run in conjunction with the backend, which is located at [Service Station Website Backend](https://github.com/nicolegunn/service-station-website-backend.git).

   ```sh
   git clone https://github.com/nicolegunn/service-station-website-backend.git
   cd service-station-website-backend
   npm install
   npm run dev
   ```

## Contributors

### **Nicole Gunn**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nicole-gunn-a582ba23b/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nicolegunn)

### **Jose Paolo Alejandro** 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/paolo-alejandro-2b0941126/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jpmal22)

### **Pouyan Iranpour** 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pouyan-iranpour-b112a6b6/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pouyaniranpour)
  
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.



