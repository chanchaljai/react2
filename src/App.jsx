import axios from "axios";
import React from "react";

const App = () => {

  const getData = async() => {
   const response = await axios.get('https://picsum.photos/v2/list')
   console.log(response)
  }
  return (
    <div className="p-10">
      <button
        onClick={getData}
        className="bg-green-600 text-white rounded text-3xl active:scale-90 hover:cursor-pointer hover:scale-105"
      >
        Get Data
      </button>
      <div className="p-5 mt-5 bg-red-950 text-white">
        Hello its data save Point
      </div>
    </div>
  );
};

export default App;
