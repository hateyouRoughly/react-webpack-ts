import React, { useEffect } from "react";
import Sticky from "@common/Sticky";

const Bar = React.lazy(() => import('@common/Bar'));
const Card = React.lazy(() => import('@common/Card'));

const Dashboard = () => {
  console.log(process);
  return (
    <div style={{ height: 1400 }}>
      <Sticky><Bar title="Project Detail - 12345.1" info="Autosaved at 12:24pm"/></Sticky>
      <div className="p-3" style={{ backgroundColor: 'whitesmoke' }}>
          <Card />
      </div>
    </div>
  );
};

export default Dashboard;
