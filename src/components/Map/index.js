import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow, Polygon } from "react-google-maps";
import { FaSearch } from "react-icons/fa";
import styles from "./GoogleMapStyles.json";
import  "./styles.scss";

import dataset from "../../data/dataset.json";
import coordinates from "./polygons.json";
let Arrcoordinates = coordinates[0].geojson.coordinates[0][0];
let cordArr = [];

Arrcoordinates.map((coordinate) =>
  cordArr.push({ lat: coordinate[1], lng: coordinate[0] })
);
export default function Map() {
  const [elem, setElem] = useState({ lat: -15.7745457, lng: -48.3575684 });
  const [fieldpressed, setFieldpressed] = useState(false);
  const [zoomChanged, setzoomChanged] = useState(5);
  const [city, setCity] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    alert(city);
    setCity('');
  }
  function handleclick() {
    setElem({ lat: -5.799659599999999, lng: -36.6444833 });
    setFieldpressed(true);
    setzoomChanged(6);
    setTimeout(() => {
      setzoomChanged(9);
    }, 500);
  }
  return (
    <>
      <GoogleMap
        streetViewControl={false}
        defaultZoom={5}
        defaultCenter={{ lat: elem.lat, lng: elem.lng }}
        center={{ lat: elem.lat, lng: elem.lng }}
        zoom={fieldpressed ? zoomChanged : 5}
        onZoomChanged={() => setFieldpressed(false)}
        defaultOptions={{
          styles: styles,
          mapTypeControl: false,
          streetViewControl: false,
        }}
      >
        <Polygon
          paths={cordArr}
          options={{
            strokeColor: "rgba(255,255,255,0.3)",
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: "rgba(255,255,255,0.1)",
            fillOpacity: 0.35,
          }}
        />
                        {dataset.map((city) => (
                        <Marker
                            icon={{
                                url: require('./circle.png'),
                                scaledSize: new window.google.maps.Size(5,5)
                            }}
                            key={city._id}
                            position={{
                                lat: city.location.coordinates[0],
                                lng: city.location.coordinates[1],
                            }}
                        />
                    ))}
      </GoogleMap>
      <button onClick={handleclick}>click here</button>
      <form className="box-form" onSubmit={handleSubmit}>
        <div className="icon">
          <FaSearch className="icon-search" size={28} color="#6a6a6a" />
        </div>
        <input
          id="input"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Busque por sua cidade"
        />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
}
