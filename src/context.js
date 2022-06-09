import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = (props) => {
  const [isauth, setIsauth] = useState(localStorage.getItem("auth"));

  return (
    <AuthContext.Provider value={[isauth, setIsauth]}>
      {props.children}
    </AuthContext.Provider>
  );
};
