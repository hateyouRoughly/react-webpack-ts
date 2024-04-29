import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './style.css';

type NavbarSize = "min" | "max";

const Layout = () => {
	const [ navbarSize, setNavbarSize ] = useState<NavbarSize>('max');
	
  return (
    <div key={navbarSize}>
      <div className="row m-0">
        <div className="col-auto">
					<div className={"fixed-top layout-sidebar-" + navbarSize}>
						<Sidebar setNavbarSize={setNavbarSize} navbarSize={navbarSize}/>
					</div>
				</div>
        <div className="col">
					<div className={"fixed-top layout-header-" + navbarSize}>
						<Header />
					</div>
          <div className={"layout-content-" + navbarSize}>
						<div>
							<Outlet />
						</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
