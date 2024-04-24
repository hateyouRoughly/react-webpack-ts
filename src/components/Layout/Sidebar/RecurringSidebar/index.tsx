import React, { useEffect, useState } from "react";
import sidebarList from "./sidebarList";
import { SidebarContent, SidebarList } from "../../interface";
import { NavLink, useLocation } from "react-router-dom";

import "./style.css";
import { Collapse } from "react-bootstrap";

const RecurringNav = ({ sidebarExtend }: { sidebarExtend: boolean }) => {
  let location = useLocation();
  return (
    <div className="recurring-navbaar">
      <ChildNavbar
        children={sidebarList}
        pathname={location?.pathname}
        padding={0}
        sidebarExtend={sidebarExtend}
      />
    </div>
  );
};

const ChildNavbar = ({
  children,
  pathname,
  padding,
  sidebarExtend,
}: {
  children: SidebarList;
  pathname: string;
  padding: number;
  sidebarExtend: boolean;
}) => {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {children.map((e, i) => (
        <li key={i} className="nav-item">
          {e.children ? (
            <NavbarCollapse
              {...e}
              pathname={pathname}
              padding={padding}
              sidebarExtend={sidebarExtend}
            />
          ) : (
            <NavLink
              to={e.path ?? "/"}
              className={`nav-link`}
              aria-current="page"
            >
							{ sidebarExtend && <span style={{ paddingLeft: padding }}></span> } {e.icon} {sidebarExtend && e.title}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

const NavbarCollapse = (e: SidebarContent) => {
  const [open, setOpen] = useState(childHasPath(e, e.pathname));
  return (
    <>
      <div
        className="nav-link"
        aria-current="page"
				style={{ cursor: 'pointer' }}
        onClick={() => setOpen(!open)}
      >
        { e.sidebarExtend && <span style={{ paddingLeft: e.padding }}></span> } {e.icon} { e.sidebarExtend && e.title}
      </div>
      <Collapse in={open}>
        <div className="navbar-collapse">
          <ChildNavbar
            children={e.children as SidebarContent[]}
            pathname={e.pathname}
            padding={e.padding + 10}
            sidebarExtend={e.sidebarExtend}
          />
        </div>
      </Collapse>
    </>
  );
};

const childHasPath: (e: SidebarContent, path: string) => boolean = (e: SidebarContent, path: string) => {
		if(e.path === path){
			return true;
		}else{
			if(e?.children){
				return e.children.some(e => childHasPath(e, path));
			}else{
				return false;
			}
		}
}

export default RecurringNav;
