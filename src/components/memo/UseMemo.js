import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrimentOne = () => {
    setCountOne(countOne + 1);
  };
  const incrimentTwo = () => {
    setCountTwo(countTwo + 1);
  };
  const isEven = useMemo(() => {
    // let i=0;
    // while(i<2000000000) i++
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <div>{countOne}</div>
      <button onClick={incrimentOne}>counterone</button>
      <span>{isEven ? "even" : "odd"}</span>
      <div>{countTwo}</div>
      <button onClick={incrimentTwo}>counterTwo</button>
    </div>
  );
};

export default UseMemo;
