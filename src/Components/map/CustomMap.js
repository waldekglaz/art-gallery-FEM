import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { CustomMapStyled } from "../styles/CustomMap.styled";

const CustomMap = () => {
  return (
    <CustomMapStyled>
      <MapContainer
        center={[41.4813163, -71.3103603]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.4813163, -71.3103603]}></Marker>
      </MapContainer>
    </CustomMapStyled>
  );
};
export default CustomMap;
