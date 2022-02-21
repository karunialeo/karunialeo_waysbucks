import React, { createContext, useState } from "react";

export const ToppingContext = createContext();

export const ToppingProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);

  return (
    <ToppingContext.Provider value={[checked, setChecked]}>
      {children}
    </ToppingContext.Provider>
  );
};
