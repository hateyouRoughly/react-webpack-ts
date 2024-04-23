import { contextReducer } from "@/contextApi";
import React, { useCallback } from "react";

const Dashboard = () => {
  const { state, dispatch } = contextReducer();
  const logout = useCallback(() => {
    dispatch({
      type: "LOGOUT",
    });
  }, []);

  return (
    <div className="p-4">
      <h4>Dashboard</h4>
			<div style={{ height: 1600 }}></div>
    </div>
  );
};

export default Dashboard;
