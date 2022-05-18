import React from "react";
import arrowRightIcon from "../assets/icon-arrow-right.svg";
import Footer from "../Components/footer/Footer";
import { StyledButton } from "../Components/styles/Button.styled";
import { StyledLocation } from "../Components/styles/Location.styled";
import LocationTextBody from "../Components/location/LocationTextBody";
import CustomMap from "../Components/map/CustomMap";
import "./Location.css";

const Location = () => {
  return (
    <StyledLocation>
      <StyledButton className="location-btn" to="/">
        <span>Our location</span>
        <img src={arrowRightIcon} alt="part of the button" />
      </StyledButton>
      <CustomMap />
      <LocationTextBody />
      <Footer />
    </StyledLocation>
  );
};

export default Location;
