import React from "react";

const SocialIcon = (props) => {
  return (
    <a href={props.href}>
      <img className="social-icon" src={props.src} alt={props.alt} />
    </a>
  );
};
export default SocialIcon;
