import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const increment = () => {
    setA(a + 1);
  };
  const decrement = () => {
    setA(a - 1);
  };
  return (
    <div className="text-center text-4xl h-screen flex flex-col justify-center">
      value of a is {a}
      <div className="flex gap-4 justify-center ">
        <div>
          <button onClick={increment} className="bg-green-700 text-white p-2 rounded">
            increment
          </button>
        </div>
        <div>
          <button onClick={decrement} className="bg-red-700 text-white p-2 rounded">
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
