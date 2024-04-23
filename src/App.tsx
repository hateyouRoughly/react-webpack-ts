import React, { useEffect, useReducer } from "react";
import router from "@components/router";
import { RouterProvider } from "react-router-dom";
import Context from "@context";
import reducer from "@context/reducer";
import initialState from "@context/initialState";

import "./style.css";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
};

export default App;
