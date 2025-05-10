import React, { useEffect } from "react";
import { useState } from "react";
const SumCalculator = () => {
  const [nums, setNums] = useState([]);
  const [sum, setSum] = useState(0);
  const handleChange = (e) => {
    let inputval = parseInt(e.target.value, 10);
    if (!isNaN(inputval)) {
      setNums((prev) => [...prev, inputval]);
    }
  };
  useEffect(() => {
    const total = nums.reduce((acc, val) => acc + val, 0);
    setSum(total);
  }, [nums]);
  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={handleChange} />
      <p>Sum:{sum}</p>
    </div>
  );
};

export default SumCalculator;
