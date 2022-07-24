
import React, { createContext, useReducer, useState } from "react";


export const AppContext = createContext();



function AppContextProvider({ children }) {
  const [state, setSate] = useState({
    isAuth: false,
    token: null
  });

  function handelogin(token) {
    setSate({
      ...state,
      isAuth: true,
      token: token
    });
  }
  function handellogout() {
    setSate({
      ...state,
      isAuth: false,
      token: null
    });
  }
  const value = { state, handelogin, handellogout };
  // you need to use context
  // fix code here
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;


