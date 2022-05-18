import React from "react";
import { StyledLocationTextBody } from "./LocationTextBody.styled";

const LocationTextBody = () => {
  return (
    <StyledLocationTextBody>
      <h2 className="title">Our Location</h2>
      <div className="text-container">
        <h3>99 king street</h3>
        <address>
          <p>Newport</p>
          <p>RI 02840</p>
          <p>United States of America</p>
        </address>
      </div>
      <div className="text-content">
        Our newly opened gallery is located near the Edward King House on 99
        King Street, the Modern Art Gallery is free to all visitors and open
        seven days a week from 8am to 9pm.
      </div>
    </StyledLocationTextBody>
  );
};

export default LocationTextBody;
