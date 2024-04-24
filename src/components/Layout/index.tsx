import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './style.css';

const Layout = () => {
  return (
    <div>
      <div className="row">
        <div className="col-auto p-0">
					<div className="fixed-top layout-sidebar">
						<Sidebar />
					</div>
				</div>
        <div className="col">
					<div className="fixed-top layout-header">
						<Header />
					</div>
          <div className="layout-content">
						<div className="p-4">
							<Outlet />
						</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
