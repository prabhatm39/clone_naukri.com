

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AppContext";

export default function PrivateRoute({ children }) {
  const { state } = useContext(AppContext);
  console.log("state", state);

  if (state.isAuth == false && state.token === undefined) {
    return <Navigate to="/login" />;
  }
  return children;
}