import React, { useState } from "react";
import useThrottle from "./hook/useThrottle";

const ThrottleComponent = () => {
  const [value, setValue] = useState("");

  const throttleValue = useThrottle(value, 1000);

  const handleChange = (value) => {
    console.log(value);
    setValue(value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Please enter .."
        onChange={(e) => handleChange(e.target.value)}
      />
      <p>ThorrleValue: {throttleValue}</p>
    </div>
  );
};

export default ThrottleComponent;
