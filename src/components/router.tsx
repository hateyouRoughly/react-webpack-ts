import BootstrapForm from "@components/BootstrapForm";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet/>}>
      <Route path="dashboard" element={<BootstrapForm />} />
      {/* ... etc. */}
    </Route>
  )
);

export default router;
