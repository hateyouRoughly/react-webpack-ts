import React, { useEffect } from "react";
import router from "@components/router";
import { RouterProvider } from "react-router-dom";

import "./style.css";

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
