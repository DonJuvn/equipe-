import React from "react";

const Title = ({ text }) => {
  return (
    <div className="title">
      {text}
      <div className="blue-point"></div>
    </div>
  );
};

export default Title;
