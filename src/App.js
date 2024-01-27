import React from 'react';
import RiverFlowApp from './components/RiverFlowApp';
import AuthComponent from './components/AuthComponent';
import './style.css';
import MapComponent from './MapComponent';

function App() {
  return (
    <div className="App">
      <AuthComponent />
      <RiverFlowApp />
      <MapComponent />
    </div>
  );
}

export default App;

