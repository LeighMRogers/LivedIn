import React from 'react';
import './App.css';
import Mapper from "./components/map/Map"

function App() {

  const mapArray = [
    {
      id: 1,
      name: "Nashville",
      lat: 36.170081,
      lng: -86.787324
    },
    {
      id: 2,
      name: "South Nashville",
      lat: 36.137647,
      lng: -86.733079
    }
  ]

  return (
    <>

    <div className="App">
      <div className="mapWrapper">
        <Mapper props={mapArray}/>
      </div>
    </div>
    </>
  );
}

export default App;
