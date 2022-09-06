import React, { createContext, useState } from 'react';

const WineConext = createContext();

const WineContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  const value = {
    data,
    setData,
    data2,
    setData2
  }
  return (
    <WineConext.Provider value={value}>
      {children}
    </WineConext.Provider>
  )
}
export { WineContextProvider, WineConext }