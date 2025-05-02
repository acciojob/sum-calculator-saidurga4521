import React from "react";
import { useState } from "react";
const SumCalculator = () => {
  const [Value, setValue] = useState(0);
  const [sum, setSum] = useState(0);
  const handleChange = (e) => {
    let inputval = e.target.value;
    setValue(inputval);
    let num = parseInt(inputval, 10);
    if (!isNaN(num)) {
      setSum(sum + num);
    }
  };
  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" value={Value} onChange={handleChange} />
      <p>Sum:{sum}</p>
    </div>
  );
};

export default SumCalculator;
