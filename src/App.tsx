import React, { useEffect } from "react";
import router from "@components/router";
import { RouterProvider } from "react-router-dom";

import "./style.css";

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
    //<div className="row">
    //  <div className="col-4 mx-auto mt-5">
    //    <BootstrapForm />
    //  </div>
    //</div>
  );
};

export default App;
