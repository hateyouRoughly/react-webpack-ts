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
import Layout from "@components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route element={<Middleware active={true}/>} >
        <Route path="" element={<Dashboard />} />
      </Route>
      {/* ... etc. */}
    </Route>
  )
);

export default router;
