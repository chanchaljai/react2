import React, { createContext } from "react";

export const DataContext = createContext();
const UserContext = ({ children }) => {

    const userData = {
      name: "Abhishek",
      age: 20,
      city: "Delhi",
    }
  return (
    <div>
      <DataContext.Provider value={userData}>
        {children}
      </DataContext.Provider>

      
    </div>
  );
};

export default UserContext;
