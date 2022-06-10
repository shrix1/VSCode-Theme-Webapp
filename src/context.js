import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = (props) => {
  const [isauth, setIsauth] = useState(localStorage.getItem("auth"));
  const [check, setCheck] = useState(1);

  return (
    <AuthContext.Provider value={([isauth, setIsauth], [check, setCheck])}>
      {props.children}
    </AuthContext.Provider>
  );
};
