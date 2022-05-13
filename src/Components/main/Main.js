import React from "react";
import MainPicture from "./MainPicture";
import image1Mobile from "../../assets/mobile/image-grid-1.jpg";
import image1Tablet from "../../assets/tablet/image-grid-1.jpg";
import image1PC from "../../assets/desktop/image-grid-1.jpg";
import image2Mobile from "../../assets/mobile/image-grid-2.jpg";
import image2Tablet from "../../assets/tablet/image-grid-2.jpg";
import image2PC from "../../assets/desktop/image-grid-2.jpg";
import image3Mobile from "../../assets/mobile/image-grid-3.jpg";
import image3Tablet from "../../assets/tablet/image-grid-3.jpg";
import image3PC from "../../assets/desktop/image-grid-3.jpg";
import MainText from "./MainText";
import { StyledMain } from "../styles/Main.styled";
import { StyledMainText } from "../styles/MainText.styled";

const Main = () => {
  return (
    <StyledMain>
      <MainPicture
        srcDesktop={image1PC}
        srcTablet={image1Tablet}
        srcMobile={image1Mobile}
        className="img img1"
        alt="Inside of our gallery"
      />
      <StyledMainText>
        <h2>Your Day at the Gallery</h2>
        <p>
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </StyledMainText>

      <MainPicture
        srcDesktop={image2PC}
        srcTablet={image2Tablet}
        srcMobile={image2Mobile}
        className="img img2"
        alt="Inside of our gallery"
      />
      <MainPicture
        srcDesktop={image3PC}
        srcTablet={image3Tablet}
        srcMobile={image3Mobile}
        className="img img3"
        alt="Inside of our gallery"
      />
      <StyledMainText dark>
        <h2>COME & BE INSPIRED</h2>
        <p>
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </StyledMainText>
    </StyledMain>
  );
};

export default Main;
