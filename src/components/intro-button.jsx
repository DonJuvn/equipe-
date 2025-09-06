import React from "react";

const ServiceButton = ({ href, text, icon }) => {
  return (
    <a href={href} className="service-btn">
      {text}
      <img src={icon} alt={text} />
    </a>
  );
};

export default ServiceButton;
   