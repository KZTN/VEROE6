import React from "react";
import "./styles.scss";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import MapContainer from "../../components/Map";

export default function Dashboard() {
  const MapWrapped = withScriptjs(withGoogleMap(MapContainer));

  return (
    <section id="dashboard">
      <div className="map" style={{ width: "100%", height: "550px" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </section>
  );
}
