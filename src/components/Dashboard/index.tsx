import React from "react";
import Sticky from "@common/Sticky";
import Bar from "@common/Bar";
import Card from "@common/Card";

const Dashboard = () => {
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
