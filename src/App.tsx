import React, { useEffect } from "react";
import "./style.css";

const App: React.FC = () => {
  useEffect(() => {
    throw new Error("Known error");
  });

  return (
    <div>
      <h1>Hello from my React TypeScript Webpack App!</h1>
    </div>
  );
};

export default App;
