import React from "react";

const MainPicture = (props) => {
  return (
    <picture>
      <source srcSet={props.srcDesktop} media="(min-width: 1440px)" />
      <source srcSet={props.srcTablet} media="(min-width: 768px)" />
      <img className={props.className} src={props.srcMobile} alt={props.alt} />
    </picture>
  );
};

export default MainPicture;
