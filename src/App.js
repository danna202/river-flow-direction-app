// src/App.js
import React from 'react';
import RiverFlowApp from './components/RiverFlowApp';
import AuthComponent from './components/AuthComponent';
import './style.css';


function App() {
  return (
    <div className="App">
      <AuthComponent />
      <RiverFlowApp />
    </div>
  );
}



export default App;


