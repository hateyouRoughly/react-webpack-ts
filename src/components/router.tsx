import BootstrapForm from "@components/BootstrapForm";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route
} from "react-router-dom";
import Login from "@components/Auth/Login";
import Register from "@components/Auth/Register";
import Dashboard from "@components/Dashboard";
import Middleware from "@components/Auth/Middleware";
import Listing from "./Listing";

const Layout = React.lazy(() => import('@components/Layout'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route element={<Layout />}>
        <Route element={<Middleware active={true}/>} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/project-list" element={<Listing />} />
        </Route>
      </Route>
      {/* ... etc. */}
    </Route>
  )
);

export default router;
