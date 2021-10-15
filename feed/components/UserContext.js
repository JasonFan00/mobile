import React, { useState, useContext, createContext } from "react";

const UserContext = createContext(null)

const UserProvider = ({value, children}) => {
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <UserContext.Provider
        value={{currentValue,setCurrentValue}} >
      {children}
    </UserContext.Provider>
   )
}
export default UserProvider
export const useUserContext = () => useContext(UserContext)
