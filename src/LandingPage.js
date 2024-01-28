// LandingPage.js
import React from 'react';
import MapComponent from './MapComponent';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to River Flow App</h1>
      <div className="map-container">
        <MapComponent />
      </div>
      {/* Add other content or components as needed */}
    </div>
  );
};

export default LandingPage;
