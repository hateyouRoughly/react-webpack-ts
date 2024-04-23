import BootstrapForm from "@components/BootstrapForm";
import React, { useEffect } from "react";
import "./style.css";

const App: React.FC = () => {
  useEffect(() => {
    // used to test error's
    //throw new Error("Known error");
  });

  return (
    <div className="row">
      <div className="col-4 mx-auto mt-5">
        <BootstrapForm />
      </div>
    </div>
  );
};

export default App;
