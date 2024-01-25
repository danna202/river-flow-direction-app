// src/components/RiverFlowApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const RiverFlowApp = () => {
  const [riverData, setRiverData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/river-flow-data');
        setRiverData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching river flow data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>River Flow Direction App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MapContainer
          center={[37.7749, -122.4194]}
          zoom={5}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {riverData.map((river) => (
            <Marker
              key={river.id}
              position={[river.latitude, river.longitude]}
            >
              <Popup>
                <strong>River:</strong> {river.name}
                <br />
                <strong>Flow Direction:</strong> {river.flowDirection}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default RiverFlowApp;
