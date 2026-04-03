import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10",
    );
    const data = response.data;
    setData(data);
    console.log(data);
  };
    useEffect(() => {
      getData();
    }, [])
    

  return (
    <div className="p-10">
    
      <div className="p-5 mt-5 bg-red-950 text-white">
        {data.map(function (elem,idx) {
          return(
          <div key={idx} className="bg-gray-400 text-black flex items-center justify-between w-full px-5 py-2 rounded mb-3"> 
          <img className="h-40" src={elem.download_url} alt="" />
          <h2>{elem.author}</h2>
          </div>);
        })}
      </div>
    </div>
  );
};

export default App;
