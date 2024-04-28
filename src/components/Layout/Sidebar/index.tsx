import React, { useCallback, useMemo } from "react";
import "./style.css";
import { contextReducer } from "@/contextApi";
import { NavLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavbarSize, SidebarList } from "../interface";
import RecurringNav from "./RecurringSidebar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { logout } from "@/reactRedux/counterSlice";
import { useDispatch } from "react-redux";

const sidebarList: SidebarList = [
  {
    icon: <></>,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <></>,
    title: "Listing",
    path: "/listing",
  },
];

const Sidebar = ({
  setNavbarSize,
  navbarSize,
}: {
  setNavbarSize: any;
  navbarSize: NavbarSize;
}) => {
  const dispatch = useDispatch();

  const _logout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const sidebarExtend = useMemo(() => navbarSize === "max", [navbarSize]);

  const toggleNavbar = useCallback(() => {
    setNavbarSize((pre: NavbarSize) => (pre === "max" ? "min" : "max"));
  }, []);

  return (
    <div className="container-fluid main-sidebar bg-dark">
      <div className="row d-flex">
        <div
          className="py-3 text-white scroll-overflow"
          style={{ height: "80vh" }}
        >
          <a
            href="#"
            className="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <img
              alt=""
              src="/images/logo.png"
              width={sidebarExtend ? 120 : 50}
              className="d-inline-block align-top"
            />{" "}
          </a>
          <hr />
          <RecurringNav sidebarExtend={sidebarExtend} />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item" onClick={_logout}>
              <a href="#" className="nav-link">
                <ExitToAppIcon htmlColor={"white"} />{" "}
                {sidebarExtend && "Logout"}
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`d-flex align-items-center justify-content-${
            sidebarExtend ? "end" : "center"
          }`}
          style={{ height: "20vh" }}
        >
          {navbarSize === "max" ? (
            <ArrowBackIosIcon
              htmlColor={"white"}
              onClick={toggleNavbar}
              role="button"
            />
          ) : (
            <ArrowForwardIosIcon
              htmlColor={"white"}
              onClick={toggleNavbar}
              role="button"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
