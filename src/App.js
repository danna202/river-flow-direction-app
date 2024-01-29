import React from 'react';
import RiverFlowApp from './components/RiverFlowApp';
import AuthComponent from './components/AuthComponent';
import './style.css';
import MapComponent from './MapComponent';
import 'leaflet/dist/leaflet.css';
import LandingPage from './LandingPage';

function App() {
  return (
    <div className="App">
      <AuthComponent />
      <RiverFlowApp />
      <br />
      <div className="map-container"></div>
      <br />
      <MapComponent />
      <LandingPage />

    </div>
  );
}

export default App;

