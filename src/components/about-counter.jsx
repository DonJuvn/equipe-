import React, { useState, useEffect } from "react";

const Counter = ({ value, label, duration = 3000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/\D/g, ""), 10); // extract number (ignore +, % etc.)
    if (start === end) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <div className="counter">
      <h2>
        {count}
        {value.replace(/[0-9]/g, "") /* keep +, %, etc. */}
      </h2>
      <p>{label}</p>
    </div>
  );
};

export default Counter;
