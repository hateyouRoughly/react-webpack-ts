import React, { useEffect, useReducer } from "react";
import router from "@components/router";
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./reactRedux/store";

import "./style.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
