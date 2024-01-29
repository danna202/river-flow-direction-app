/* global trace_api */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const RiverFlowApp = () => {
  const [riverData, setRiverData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Streamer Trace API (integrate directly into your React component)
        // Example: Load the Streamer Trace API script dynamically
       

        // Fetch river flow data
        // const riverResponse = await axios.get('/api/river-flow-data');
        // setRiverData(riverResponse.data);

        // Fetch data from Streamer Trace API
        // const streamerResponse = await axios.get('STREAMER_TRACE_API_ENDPOINT', {
        //   headers: {
        //     Authorization: `Bearer YOUR_API_KEY`,
        //   },
        // });

        // Process the Streamer Trace API data
        // console.log(streamerResponse.data);

  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

// Fetch river flow data
        const riverResponse = await axios.get('/api/river-flow-data');
        setRiverData(riverResponse.data);

        // Fetch data from Streamer Trace API (integrate directly into your React component)
        // Example: Load the Streamer Trace API script dynamically
        const script = document.createElement('script');
        script.src = 'https://txpub.usgs.gov/DSS/Streamer/api/3.14/js/trace_api.min.js';
        script.src = '/static/trace_api.min.js';  
        script.async = true;
        document.body.appendChild(script);

        // Process the Streamer Trace API data
        console.log(trace_api);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>River Flow Direction App</h1>
  
      {loading ? (
        <div>
          <p>Map</p>
          <br />
          <br />
          <br />
          {/* add an image */}
          <img src="https://txpub.usgs.gov/DSS/Streamer/api/3.14/web/samples/thumbs/sample05_thumb.png" alt="us rivers" />
        </div>
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

